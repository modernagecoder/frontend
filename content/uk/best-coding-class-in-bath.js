'use strict';
// Bath (cg- city page, UK cluster Phase 4). Spine: do Austen's two Bath novels sound alike? Cosine similarity on word
// vectors from six Project Gutenberg novels (Northanger Abbey 121, Persuasion 105, Pride and Prejudice 1342, Emma 158,
// Sense and Sensibility 161, Mansfield Park 141; plain text read 23 September 2026; scratchpad bth/cos.py). Tokens:
// 78,305 / 84,195 / 128,565 / 162,099 / 120,869 / 161,639. Spellings differ by edition: shew* 0/23/0/67/0/56,
// connexion 0/17/0/30/0/30, "every thing" 0/5/0/107/71/2; results below are after normalising shew, connexion and
// split every/any/some/no + thing/body. Cosine similarity, 15 pairs: raw counts, closest Northanger/Mansfield 0.985
// (three pairs round to 0.985), lowest Persuasion/Emma 0.972, Northanger/Persuasion 0.977 (11th); top 100 corpus words
// removed, closest Northanger/Pride and Prejudice 0.648, Northanger/Persuasion 0.596 (12th); TF-IDF (idf = ln(6/df)),
// closest Northanger/Pride and Prejudice 0.046, Northanger/Persuasion 0.003 (7th); TF-IDF with 355 name-like words
// removed (capitalised in 90 percent of mid-sentence uses, at least 5 times), closest Persuasion/Mansfield Park 0.124
// (0.156 before normalising spellings), Northanger/Persuasion 0.073 (4th). Largest shared terms: Northanger/Persuasion
// pump, concert, buildings; Persuasion/Mansfield grant (a family name the filter missed), sailor, navy, baronet, tenant,
// naval. Top distinctive words without names: Northanger pump, castle, cabinet, abbey, chest, heroine, manuscript,
// gallery; Persuasion judgement, concert, navy, tenant, sailors, baronet. "Bath" capitalised: 83 / 99 / 1 / 20 / 2 / 12;
// Persuasion chapters 13 to 24 hold 76 of its 99.
// Lesson family: cosine similarity and text vectors (bag of words, stop words, TF-IDF, name leakage, edition
// artefacts). Screened 23 September 2026: cosine similarity, TF-IDF, Austen novels 0 hits; distinct from Canterbury
// Heaps' law and York entropy.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Bath and North East Somerset E06000022: TS001 193,409
// usual residents, 185,438 in households, 7,971 communal; TS007A 14,772 aged 15 to 19 (7.6 percent, England 5.7),
// 18,549 aged 20 to 24 (9.6, England 6.0); TS068 46,409 students of 184,389 aged 5 and over (25.2 percent, England
// 20.4); TS006 559.2 per square km (England 433.5). MSOA E02002991 Central Bath and Lansdown 10,998 residents, 2,928.0
// per square km; E02002998 Oldfield Park East 5,979 residents, 2,432 students of 5,747 (42.3 percent), 6,215.8 per
// square km. Bath World Heritage (council site): City of Bath inscribed 1987; second inscription as one of the Great
// Spa Towns of Europe on 24 July 2021. Roman Baths site: gilt bronze head of the goddess Sulis Minerva, one of the
// treasures of Roman Britain. NHLE: Grand Pump Room 1394019, Assembly Rooms 1394144, Nos. 1-30 Royal Crescent 1394736,
// Abbey Church of St Peter and St Paul 1394015, all Grade I, listed 12 June 1950.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'BATH', blurb: 'The Georgian spa city, with a project that asks whether Jane Austen\'s two Bath novels really sound alike once a computer measures them.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-bath',
  code: 'bth',
  accent: '#776540',
  accentRationale: 'Bath: a honey-stone ochre for the Georgian terraces, from the solver (4.58:1 on every paper tint, dE 7.3 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Bath',
    eyebrow: 'Bath, Somerset',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Bath and North East Somerset' },
      { type: 'AdministrativeArea', name: 'Somerset' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bath, England',
  title: 'Best Coding Classes in Bath | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Bath learners aged 6 to 67, from Oldfield Park and Widcombe to Keynsham. The first lesson is on us.',
  ogDescription: 'Coding and AI lessons for Bath, on a page that measures whether Jane Austen\'s two Bath novels, Northanger Abbey and Persuasion, really sound alike.',
  twitterDescription: 'Bath learners aged six to sixty-seven can study coding, Python and AI with us in live online lessons, and the first one is free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Bath Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, text analysis, AI and mathematics taught live online in English to Bath children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Bath',
  capsuleQ: 'What are the best coding classes in Bath?',
  capsule: 'Bath and North East Somerset had 193,409 usual residents at the 2021 census, and 25.2% of those aged five and over were students, against 20.4% in England. The city\'s World Heritage office says Bath was inscribed as a World Heritage Site in 1987 and again in 2021 as one of the Great Spa Towns of Europe. We teach Bath learners aged six to sixty-seven from India over live video, in a group of five to ten at the same level or one to one, at times that suit the UK day. The first lesson is free, and after that a group place is USD 100 a month and private lessons USD 150.',
  lead: 'Jane Austen set parts of two novels in Bath: Northanger Abbey names the city 83 times and Persuasion 99. Do they sound alike? Our teenagers turn each of six Austen novels into a vector of word counts and measure the angle between them, cosine similarity. With raw counts, every pair scores above 0.97, because "the" and "and" swamp everything. With TF-IDF, which weights words by how rare they are, every pair falls below 0.05, because character names dominate. Only when names are removed do themes appear: the Bath pair rises to fourth of fifteen, joined by "pump", "concert" and "buildings", and Persuasion\'s nearest neighbour becomes Mansfield Park, through its sailors and navy.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Bath, please.',

  picks: {
    eyebrow: 'Course picks for Bath',
    h2: 'Four courses for the spa city',
    intro: 'Pick the course closest to what the learner already loves. A free live lesson opens each one, and booking it never needs payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards programs that count words and compare stories.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to complete projects, enough to read whole novels from files and count every word in them.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning for teenagers, where turning text into vectors is the first step towards search and language models.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who handle documents, from finding near-duplicate files to grouping similar reports.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bath today',
      h2: 'A student city inside a wider district',
      intro: 'Census 2021 figures for Bath and North East Somerset, which includes Keynsham, Midsomer Norton and Radstock as well as Bath, and for two middle-layer areas of the city named by the House of Commons Library, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Bath and North East Somerset and two Bath areas, Census 2021', head: ['Area', 'Usual residents', 'Students among those aged 5 and over', 'Residents per square kilometre'], rows: [
          ['Bath and North East Somerset', '193,409', '25.2%', '559.2'],
          ['Central Bath and Lansdown', '10,998', '25.2%', '2,928.0'],
          ['Oldfield Park East', '5,979', '42.3%', '6,215.8'],
          ['England', '56,490,048', '20.4%', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers and students', p: 'Across the district, 7.6% of residents were aged 15 to 19 and 9.6% were aged 20 to 24, against 5.7% and 6.0% in England.' },
          { h3: 'A student neighbourhood', p: 'In Oldfield Park East, 2,432 of the 5,747 residents aged five and over were students, 42.3%, in an area of 6,215.8 people per square kilometre.' },
          { h3: 'Households and halls', p: 'District-wide, 185,438 people lived in households and 7,971 in communal establishments such as student halls; 46,409 of the 184,389 aged five and over were in study.' }
        ] },
        { kind: 'p', text: 'Our Bath classes bring that mix together. A Year 3 child in Combe Down might be building a first game, a Year 13 student in Widcombe finishing an A level project, and an adult in Keynsham learning Python for their job, each in a small group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Roman and Georgian',
      h2: 'Twice a World Heritage Site',
      intro: 'From the council\'s World Heritage and Roman Baths websites, and Historic England\'s open listing data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1987', p: 'The City of Bath was inscribed as a World Heritage Site. Bath\'s World Heritage office describes it as rare in having two UNESCO inscriptions.' },
          { h3: '24 July 2021', p: 'The Great Spa Towns of Europe were inscribed on the World Heritage List, with Bath among them, giving the city its second inscription.' },
          { h3: 'Sulis Minerva', p: 'The Roman Baths calls the gilt bronze head of the goddess Sulis Minerva one of the treasures of Roman Britain, part of a collection of thousands of finds.' }
        ] },
        { kind: 'p', text: 'Historic England lists the Grand Pump Room, the Assembly Rooms, the thirty houses of the Royal Crescent and Bath Abbey at Grade I. The Pump Room turns up in our project too: "pump" is the most distinctive word in Northanger Abbey once names are removed, almost all of it from the novel\'s 23 mentions of the pump-room, and one of the words it shares with Persuasion. We have no connection with Bath and North East Somerset Council, the Roman Baths, Historic England or Project Gutenberg.' },
        { kind: 'spec', title: 'Where the novels come from', p: 'Project Gutenberg publishes all six novels as free plain text. They were transcribed by different volunteers from different printed editions, which, as the project found, matters more than you might expect.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Do Austen\'s two Bath novels sound alike?',
      intro: 'Turn each novel into a list of word counts, treat the list as an arrow in a space with one direction per word, and measure the angle between two arrows. A cosine of 1 means the same direction; 0 means nothing in common.',
      body: [
        { kind: 'table', caption: 'Cosine similarity between six Austen novels (15 pairs), spellings normalised, under four ways of counting words', head: ['How words are counted', 'Closest pair', 'Northanger Abbey and Persuasion'], rows: [
          ['Raw counts of every word', 'Northanger Abbey and Mansfield Park, 0.985', '0.977, 11th of 15'],
          ['100 most common words removed', 'Northanger Abbey and Pride and Prejudice, 0.648', '0.596, 12th of 15'],
          ['TF-IDF weighting', 'Northanger Abbey and Pride and Prejudice, 0.046', '0.003, 7th of 15'],
          ['TF-IDF, name-like words removed', 'Persuasion and Mansfield Park, 0.124', '0.073, 4th of 15']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count the words', p: 'Strip the Gutenberg front and back matter, split each book into words and count them. Northanger Abbey has 78,305 words by our rule; Emma has 162,099.' },
          { h3: '2. Weight the words', p: 'TF-IDF multiplies each count by how rare the word is across the six books. A word in all six scores zero; a name found in one book scores highest.' },
          { h3: '3. Remove the names', p: 'Words capitalised in at least nine out of ten mid-sentence uses are treated as names: 355 of them. The rule is imperfect; it missed Grant, a family in Mansfield Park.' }
        ] },
        { kind: 'callout', h3: 'The editions were talking, not Austen', p: 'Our first run put Persuasion and Mansfield Park far ahead at 0.156, with "shewn", "connexion" and "everything" among the words linking them. Those are spelling choices: the Gutenberg Emma writes "every thing" 107 times and "everything" never, while Northanger Abbey uses modern "show" throughout. Normalising the spellings cut the pair to 0.124. It stayed closest, but now through sailor, navy, baronet and naval, which is at least a real connection between two books with naval officers in them.' },
        { kind: 'p', text: 'The two Bath novels never become the closest pair. Their strongest shared words, pump, concert and buildings, are Bath life itself, and the city\'s name appears 83 times in Northanger Abbey and 99 in Persuasion, 76 of them in its second half, chapters 13 to 24. Setting alone does not make two books similar; the plots, the characters and even the spelling of the edition pull harder.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Text as vectors',
      h2: 'Five decisions before comparing any two documents',
      intro: 'Learned on Austen, then used in search engines, plagiarism checks, recommendation systems and the embeddings behind modern AI tools.',
      body: [
        { kind: 'table', caption: 'Choices that decide what "similar" means', head: ['Decision', 'For the six novels', 'What goes wrong if you skip it'], rows: [
          ['What is in the file?', 'Gutenberg front and back matter removed', 'Licence text counted as Austen'],
          ['Are the spellings consistent?', 'shew, connexion, every thing normalised', 'Editors\' habits read as the author\'s'],
          ['Which words carry meaning?', 'Most common words removed or down-weighted', 'Every book looks the same'],
          ['Should names count?', 'Removed by a stated, imperfect rule', 'Every book looks unique'],
          ['What is the question?', 'Which pairs share themes, not plots', 'A number with no meaning attached']
        ] },
        { kind: 'p', text: 'The fourth row is a judgement call. Names are what make a novel itself, so keeping them is defensible if the question is about stories. Removing them is right if the question is about themes and style. The honest report states which question it answers and shows the numbers both ways.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Counting favourite words in two stories and drawing them as arrows, to see which stories point the same way.' },
          { h3: 'Teenagers', p: 'Six novels in Python, word vectors, TF-IDF and cosine similarity, with the name rule and spelling fixes tested step by step.' },
          { h3: 'Adults', p: 'Comparing documents at work, from duplicate reports to similar enquiries, with every cleaning step written down.' }
        ] },
        { kind: 'p', text: 'We have no connection with Bath and North East Somerset Council, the Roman Baths, Historic England or Project Gutenberg. The novels are in the public domain and the census and listing data are open; the vectors, similarities and word lists on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting words to cosine similarity',
    intro: 'The age bands give a rough idea; the free lesson finds the right starting level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Words and stories', p: 'Counting words in two short stories and deciding, with reasons, which stories are most alike.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Counts in code', p: 'Counting every word in a chapter with a Python dictionary and listing the most common ones.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Vectors and angles', p: 'Word vectors, TF-IDF and cosine similarity on whole novels, with each cleaning choice tested.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Documents at work', p: 'Finding similar and duplicate documents in real collections, with the rules behind every match explained.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools compare text with embeddings. Why should a Bath teenager count Austen\'s words by hand?',
    intro: 'Because embeddings are still vectors compared by cosine similarity, and they inherit every quirk of the text they were built from.',
    p1: 'Modern search and chat tools turn text into vectors and compare them with the same cosine measure used here. A learner who has watched spelling habits of old editions pull two novels together knows that a similarity score can reflect how a text was copied, not what it means, and will check before trusting one.',
    p2: 'The name problem is just as real in AI. Systems that match documents often latch onto names and places rather than ideas, much as TF-IDF did with Austen\'s characters. Seeing that happen on six familiar books makes it easy to spot in a far larger system.',
    closer: 'So a Bath teenager should still learn to program in 2026, in the city of the pump-room Austen wrote about: machines can compare millions of documents, but someone has to ask what the similarity is really measuring.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Oldfield Park, Weston or Keynsham, right at home',
    intro: 'The district runs from the city\'s terraces out to Keynsham, Midsomer Norton and Radstock. Online, every one of them is next to the lesson.',
    cells: [
      { h3: 'City and valleys', p: 'A learner in Twerton and another in Radstock can share a class without a drive into the centre or a hunt for parking.' },
      { h3: 'English school stages', p: 'We teach to the stages used in Bath schools, from Reception and Key Stages 1 to 4 through GCSE and A level, entirely in English.' },
      { h3: 'A proper first lesson', p: 'The free session is a full lesson on a real task and finishes with a recommended level, course and weekly time. We never take card details.' },
      { h3: 'Groups by stage', p: 'Five to ten learners at the same level, from Bath, the rest of the UK and abroad, which keeps sensible times available for every stage.' },
      { h3: 'Twice every week', p: 'Two regular lessons a week, about eight a month, with holidays and exam weeks agreed with the teacher well in advance.' },
      { h3: 'Evening in Bath, night in India', p: 'A 5 pm lesson in Bath starts at 9.30 pm in India while British Summer Time runs and 10.30 pm in winter, since India has one time all year; our teachers work late for UK families.' }
    ],
    spec: { title: 'Around Bath and Bristol', p: 'Families in Bristol, Chippenham, Frome or Trowbridge join exactly the same classes, because every group is online and set by level.' }
  },

  fees: {
    h2: 'Bath lesson fees',
    intro: 'A free first lesson, then a single monthly fee.',
    first: 'A full lesson at no cost, finishing with our advice on level, course and a weekly time.',
    group: 'About eight live lessons a month in a group of five to ten learners at one stage.',
    private: 'About eight live lessons a month, with the teacher attending to your learner alone.',
    closer: 'A Lansdown family pays in US dollars like every family outside India, and there are no pound prices anywhere on the site. The free lesson always comes first, with billing only after a course and a weekly time are agreed; the pricing page sets out pausing, missed lessons and changing between a group and private teaching.'
  },

  reviewsH2: 'Six family reviews from Google, just as written',

  book: {
    h2: 'Book a free lesson for a Bath learner',
    intro: 'The first task depends on the learner: a word-counting game with two short stories for a young child, a Python program that counts the words in a chapter for a beginner, or six Austen novels and cosine similarity for a teenager ready for real text.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Bath learner.'
  },

  faq: {
    h2: 'Bath coding class questions',
    intro: 'What Bath families ask us most often.',
    items: [
      { q: 'How many people live in Bath and North East Somerset?', a: 'Census 2021 counted 193,409 usual residents in Bath and North East Somerset, the council area that includes Bath, with 185,438 in households and 7,971 in communal establishments.' },
      { q: 'How does Bath compare with England?', a: 'It has many students and young people: 25.2% of residents aged five and over were in study in 2021 (England 20.4%), and 9.6% were aged 20 to 24 (England 6.0%). In Oldfield Park East, 42.3% of residents aged five and over were students.' },
      { q: 'What is cosine similarity?', a: 'A way of comparing two lists of numbers by the angle between them when they are drawn as arrows. For texts, each list holds word counts; a score near 1 means the texts use words in similar proportions, and a score near 0 means they share little.' },
      { q: 'Are Northanger Abbey and Persuasion the most similar Austen novels?', a: 'Not by our measures. With names removed and spellings normalised, they are the fourth closest of fifteen pairs, linked by words such as pump, concert and buildings. Persuasion comes closest to Mansfield Park.' },
      { q: 'Where do the novels come from?', a: 'From Project Gutenberg\'s free plain-text editions of six Austen novels, with the Gutenberg front and back matter removed before counting.' },
      { q: 'Why is Bath a World Heritage Site twice?', a: 'Bath\'s World Heritage office says the City of Bath was inscribed in 1987, and that Bath received a second inscription in 2021 as one of the Great Spa Towns of Europe. We are not connected with the council or its World Heritage office.' },
      { q: 'When do Bath lessons happen?', a: 'Bath families can pick an after-school slot, a weekday evening or a weekend, and we set the exact UK time in the free lesson. India is four and a half hours ahead of Bath in summer and five and a half in winter.' },
      { q: 'Is there anywhere in Bath to visit you?', a: 'No. We have no Bath centre and no premises anywhere in the UK, since every lesson is live online. A learner needs a computer with sound and a good connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do lessons cost for a Bath learner?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable is USD 150 a month. No charge is made before the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than age or where they live, with five to ten learners at one stage in each group. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The West Country and beyond',
    html: 'Down the road, the <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol page</a> draws a Voronoi diagram showing which library is nearest to each part of the city, and in <a class="cg-inline-link" href="/best-coding-class-in-canterbury">Canterbury</a> learners count the words in Chaucer and find the answer depends on what a word is. <a class="cg-inline-link" href="/best-coding-class-in-york">York</a> measures how surprising its street names are. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bath and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-bristol', label: 'Bristol' },
    { href: '/best-coding-class-in-canterbury', label: 'Canterbury' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-bth .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.35rem); }
.cg-root.cg-bth .cg-hero h1 { font-weight: 600; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-bth .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-bth .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-bth .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.01em; }
.cg-root.cg-bth .cg-grid-3 { gap: clamp(1.1rem, 2.5vw, 2.1rem); }
.cg-root.cg-bth .cg-table th { letter-spacing: 0.03em; }
.cg-root.cg-bth .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bth .cg-ladder-col { border-top: 1px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-bth .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Bath and North East Somerset, Census 2021 via Nomis (E06000022): TS001 193,409 usual residents, 185,438 in households, 7,971 in communal establishments; TS007A 14,772 aged 15 to 19 (7.6 percent, England 5.7), 18,549 aged 20 to 24 (9.6 percent, England 6.0); TS068 46,409 students of 184,389 residents aged 5 and over (25.2 percent, England 20.4); TS006 559.2 per square kilometre (England 433.5). MSOAs: E02002991 Central Bath and Lansdown 10,998 residents, 25.2 percent students, 2,928.0 per square kilometre; E02002998 Oldfield Park East 5,979 residents, 2,432 of 5,747 students (42.3 percent), 6,215.8 per square kilometre. Bath World Heritage: inscribed 1987; Great Spa Towns of Europe 24 July 2021. Roman Baths: Sulis Minerva head. NHLE: Grand Pump Room, Assembly Rooms, Nos. 1-30 Royal Crescent, Bath Abbey, Grade I.',
    localProject: 'Do Austen\'s two Bath novels sound alike? Six Gutenberg novels, spellings normalised (shew, connexion, every thing). Cosine similarity, 15 pairs: raw counts closest Northanger/Mansfield 0.985, Bath pair 0.977 (11th); top 100 words removed closest Northanger/Pride and Prejudice 0.648, Bath pair 0.596 (12th); TF-IDF closest Northanger/Pride and Prejudice 0.046, Bath pair 0.003 (7th); TF-IDF with 355 name-like words removed closest Persuasion/Mansfield 0.124 (0.156 before spelling fix), Bath pair 0.073 (4th). Shared: pump, concert, buildings; Persuasion/Mansfield sailor, navy, baronet, naval and missed name grant. Bath counts 83 and 99; 76 of Persuasion\'s in chapters 13 to 24. Lesson family: cosine similarity and TF-IDF.',
    requiredMentions: [
      '193,409',
      '185,438',
      '7,971',
      '46,409',
      '184,389',
      'Northanger',
      'Persuasion',
      'Pump Room',
      'Sulis Minerva',
      'Great Spa Towns',
      'Oldfield Park',
      'cosine similarity'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: Bath and North East Somerset 193,409 usual residents; MSOAs E02002991 and E02002998.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000022,E02002991,E02002998' },
      { claim: 'Nomis, Census 2021 TS007A: Bath and North East Somerset and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000022,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: students aged 5 and over, district 25.2 percent; Oldfield Park East 42.3 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000022,E02002991,E02002998,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: density, district 559.2 per square kilometre; MSOA densities.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000022,E02002991,E02002998,E92000001' },
      { claim: 'House of Commons Library, MSOA Names: Central Bath and Lansdown; Oldfield Park East.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Bath World Heritage: City of Bath inscribed 1987; Great Spa Towns of Europe inscribed 24 July 2021.', url: 'https://www.bathworldheritage.org.uk/' },
      { claim: 'The Roman Baths: gilt bronze head of the goddess Sulis Minerva, one of the treasures of Roman Britain.', url: 'https://www.romanbaths.co.uk/' },
      { claim: 'Historic England NHLE open data: Grand Pump Room 1394019, Assembly Rooms 1394144, Nos. 1-30 Royal Crescent 1394736, Bath Abbey 1394015, Grade I.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1394019' },
      { claim: 'Project Gutenberg eBooks 121, 105, 1342, 158, 161 and 141: six novels by Jane Austen, plain text.', url: 'https://www.gutenberg.org/ebooks/author/68' }
    ],
    rejectedClaims: [
      'Details of Austen\'s own years in Bath: the only fetchable source found was a commercial attraction\'s shop pages; the page relies on the novels\' own text instead.',
      'The Roman Baths\' description of itself using a superlative: not quoted, to keep claims attributable and modest.',
      'Reading the first-run Persuasion and Mansfield Park similarity as a thematic link: much of it came from edition spellings, so results are reported after normalising.',
      'A definitive list of names: the 90 percent capitalisation rule is stated and its misses (Grant, Sophy, Hughes) acknowledged.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Bath and North East Somerset Council, the Roman Baths, Historic England or Project Gutenberg.'
    ]
  }
};
