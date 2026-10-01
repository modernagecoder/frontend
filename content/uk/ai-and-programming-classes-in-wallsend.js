'use strict';
// Wallsend (cg- town page, UK cluster Phase 10, towns band B, row 532). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how can an AI search system squeeze each
// stored vector into a few bytes and still find the right neighbours? (product quantisation against plain rounding, on
// census age profiles).
// Data (read 30 September 2026): Nomis Census 2021 TS007A (age by five-year bands, 18 bands) for all 729 output areas
// of North Tyneside (E08000022); ONS OA21 to BUA22 lookup (ArcGIS), 163 of those output areas in the Wallsend BUA.
// Our run (scratchpad wsd/pq.py): each output area becomes a vector of 18 age shares. Queries: the 163 Wallsend output
// areas; truth: each one's 10 nearest output areas in North Tyneside by Euclidean distance on full-precision shares.
// Recall at 10 (share of the true 10 found by searching the compressed vectors, query kept exact): 8-bit scalar
// rounding (18 bytes) 98.8%; 4-bit (9 bytes) 82.0%; 3-bit (6.75 bytes) 66.9%; 2-bit (4.5 bytes) 36.2%. Product
// quantisation (k-means codebooks per sub-vector, 5 seeds, mean): 9 pieces x 256 codes (9 bytes) 91.5% (91.0 to 92.0);
// 9 x 64 (6.75 bytes) 81.1%; 9 x 16 (4.5 bytes) 64.5%; 6 x 64 (4.5 bytes) 68.4%; 6 x 256 (6 bytes) 84.0%; 3 x 256
// (3 bytes) 68.0%; 2 x 256 (2 bytes) 58.6%; 2 x 16 (1 byte) 24.7%. Full precision: 144 bytes (float64).
// Codebook size for 256 codes: 4,608 numbers, against 13,122 numbers in the raw table.
// Wallsend output areas: 163, residents 108 to 506 (median 271). Age shares across them: 0-14 4.5% to 36.9% (median
// 15.8%); 15-24 3.6% to 18.5% (10.2%); 25-44 8.3% to 53.6% (26.8%); 45-64 7.9% to 39.7% (27.1%); 65+ 0.3% to 51.6% (17.7%).
// Lesson family: product quantisation / vector compression for nearest-neighbour search (recall against bytes).
// Place facts: North Tyneside TS001 208,967; ONS 2021 BUA Wallsend 45,355.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WALLSEND', label: 'Wallsend', blurb: 'AI and programming classes for Wallsend in North Tyneside, with a vector search project that shrinks 729 neighbourhood profiles to a few bytes each.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-wallsend',
  code: 'wsd',
  accent: '#18509C',
  accentRationale: 'Wallsend: a shipyard blue (7.88:1 contrast on white), chosen by hand as a muted tone kept clear of neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Wallsend',
    eyebrow: 'Wallsend, North Tyneside, Tyne and Wear',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Tyne and Wear' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-east-england', name: 'North East England' }],
  nav: [
    { label: 'Tyne and Wear', href: '/coding-classes-in-tyne-and-wear' },
    { label: 'Newcastle', href: '/best-coding-class-in-newcastle-upon-tyne' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wallsend, North Tyneside',
  title: 'AI and Programming Classes in Wallsend, North Tyneside',
  description: 'AI, programming, Python and vibe coding classes live online for Wallsend, Howdon, Willington Quay, Rosehill and Holy Cross, ages 6 to 67. The first lesson is free.',
  ogDescription: 'AI and programming classes for Wallsend, with a vector search project: product quantisation compresses 729 North Tyneside age profiles and still finds their neighbours.',
  twitterDescription: 'Wallsend, North Tyneside: AI, programming, Python and vibe coding lessons online for ages 6 to 67, beginning with a free lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Wallsend, North Tyneside',
    description: 'AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Wallsend and North Tyneside, taught live online with projects that measure what compression costs.'
  },

  h1: 'AI and programming classes in Wallsend',
  capsuleQ: 'Where should a Wallsend learner look for the best AI and programming classes?',
  capsule: 'The Wallsend built-up area had 45,355 residents at the 2021 census, according to the ONS, and North Tyneside had 208,967. Howdon, Willington Quay, Rosehill, Holy Cross, Willington, Point Pleasant and Howdon Pans are suburban areas in postcodes.io whose nearest postcode falls inside the Wallsend built-up area. Our tutors, who are based in India, teach AI, programming, Python, vibe coding and maths live on video to learners aged six to 67, privately or in classes of five to ten who share a level. We want every learner to be able to explain why a program gives the answer it does, and to notice when an AI tool is trading accuracy for speed. The Wallsend project turns every census neighbourhood in North Tyneside into a list of 18 numbers and asks how small that list can be squeezed before a search for similar places starts to fail. A first lesson costs nothing and ends with a course suggestion; later lessons are USD 100 a month in a group or USD 150 a month privately.',
  lead: 'Every time a chatbot looks something up in a large document store, it is doing a nearest-neighbour search. Each piece of text has been turned into a long list of numbers, and the system hunts for the stored lists closest to the question\'s list. With millions of stored lists, memory becomes the bottleneck, so real systems compress them, sometimes to a few dozen bytes each. The trick most often used is called product quantisation. It is easier to understand on data a learner can picture, and North Tyneside supplies some: the age make-up of each of its 729 census output areas, 163 of them in Wallsend.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Wallsend.',

  picks: {
    eyebrow: 'Wallsend starting points',
    h2: 'AI, programming and thinking courses for Wallsend',
    intro: 'Choose by age below. Each course begins with one live lesson that is free and needs no card to reserve.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: describe a picture in ten words, then in three, and see what gets lost.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Get an AI to build a Scratch matching game, then shrink its costumes until matches start failing.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'How AI finds similar things, including compressed vector search on North Tyneside\'s neighbourhoods.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects made with an AI assistant and checked against a full-precision answer.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wallsend in the census',
      h2: 'Wallsend\'s 163 output areas are not alike',
      intro: 'Output areas are the smallest census units. Across Wallsend\'s, the age mix varies far more than a town average suggests.',
      body: [
        { kind: 'table', caption: 'Age shares across the 163 output areas in the Wallsend built-up area (our calculation from Census 2021 table TS007A)', head: ['Age group', 'Lowest share', 'Middle output area', 'Highest share'], rows: [
          ['Under 15', '4.5%', '15.8%', '36.9%'],
          ['15 to 24', '3.6%', '10.2%', '18.5%'],
          ['25 to 44', '8.3%', '26.8%', '53.6%'],
          ['45 to 64', '7.9%', '27.1%', '39.7%'],
          ['65 and over', '0.3%', '17.7%', '51.6%']
        ] },
        { kind: 'p', text: 'Each output area holds between 108 and 506 residents, with 271 in the middle one. Some are dominated by young families and some by retired people, which is exactly what makes them useful for a similarity search: there are real differences to find. The two headline populations on this page are separate ONS counts and we do not combine them. Schools in Wallsend teach the national curriculum for England; we work round the term dates you send.' },
        { kind: 'callout', h3: 'Tyne and Wear, the North East and why we teach this way', p: 'The county has a page at <a class="cg-inline-link" href="/coding-classes-in-tyne-and-wear">coding classes in Tyne and Wear</a>, and the region at <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-east-england">North East England</a>. Our case for putting reasoning before tools is in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Wallsend project',
      h2: 'Product quantisation on 729 neighbourhood profiles',
      intro: 'Store each profile in fewer bytes, search the compressed store, and count how many true neighbours survive.',
      body: [
        { kind: 'p', text: 'The learner downloads census table TS007A from Nomis for every output area in North Tyneside and divides each count by the area\'s total, giving 18 shares per area, one for each five-year age band. Two areas count as similar when their 18 shares are close. For each of Wallsend\'s 163 output areas the program finds the 10 most similar areas in the whole borough using full-precision numbers. That is the correct answer. Stored as ordinary 64-bit numbers, each profile takes 144 bytes. The question is how much smaller it can get before the search starts returning the wrong neighbours.' },
        { kind: 'p', text: 'The obvious approach is to round each share, keeping fewer bits for it. Product quantisation does something cleverer. It cuts the 18 numbers into pieces, say nine pieces of two, and for each piece learns a small codebook of typical values with k-means clustering. A profile is then stored as nine codebook numbers. With 256 entries per codebook, each code fits in one byte.' },
        { kind: 'table', caption: 'Share of the true 10 nearest output areas found when searching compressed profiles, averaged over the 163 Wallsend queries (our Python; product quantisation averaged over five random starts)', head: ['How each profile is stored', 'Bytes per profile', 'True neighbours found'], rows: [
          ['Full 64-bit numbers', '144', '100%'],
          ['Each share rounded to 8 bits', '18', '98.8%'],
          ['Each share rounded to 4 bits', '9', '82.0%'],
          ['Product quantisation, 9 pieces, 256 codes each', '9', '91.5%'],
          ['Each share rounded to 2 bits', '4.5', '36.2%'],
          ['Product quantisation, 6 pieces, 64 codes each', '4.5', '68.4%'],
          ['Product quantisation, 3 pieces, 256 codes each', '3', '68.0%'],
          ['Product quantisation, 2 pieces, 256 codes each', '2', '58.6%']
        ] },
        { kind: 'p', text: 'At every size where we tested both, product quantisation came out ahead. With 9 bytes a profile it finds 91.5% of the true neighbours where rounding finds 82.0%; at 4.5 bytes the gap is 68.4% against 36.2%. Even squeezed into 2 bytes, it still finds more than half. The reason is that the codebooks learn which combinations of values actually occur. Rounding spends bits evenly on every possible value, most of which no real neighbourhood ever has.' },
        { kind: 'p', text: 'There is a catch, and learners are expected to find it. The codebooks have to be stored too. With 256 codes per piece they hold 4,608 numbers, while the whole raw table of North Tyneside is only 13,122. For 729 profiles the saving is an illusion. Product quantisation earns its keep when there are millions of stored vectors sharing the same small codebooks, which is exactly the situation inside a large AI search system.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Describe classmates by five traits, then by two, and see who gets matched with the wrong friend.' },
          { h3: 'Ages 11 to 15', p: 'Store the profiles with fewer bits in Python and measure how the list of nearest areas changes.' },
          { h3: 'Ages 15 and up', p: 'Write k-means and product quantisation with NumPy, then test recall against bytes on all 729 areas.' }
        ] },
        { kind: 'callout', h3: 'Data and limits', p: 'Census 2021 table TS007A via Nomis, and the ONS lookup from output areas to built-up areas, both under the Open Government Licence. The profiles, the searches and the percentages are our own. Similar age mixes say nothing about the people who live in an area, and a different set of variables would give different neighbours.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Search inside AI',
      h2: 'What compressing neighbourhood profiles teaches about AI and vibe coding',
      intro: 'Every fast AI search trades a little accuracy for a lot of memory, and someone should measure the trade.',
      body: [
        { kind: 'table', caption: 'From Wallsend\'s profiles to AI systems', head: ['In the project', 'In AI practice'], rows: [
          ['144 bytes down to 9', 'Vector databases compress stored embeddings'],
          ['91.5% of true neighbours kept', 'Compressed search returns most, not all, of the right results'],
          ['Codebooks bigger than the saving', 'Some tricks only pay at large scale'],
          ['Rounding wasted bits on values that never occur', 'Learn the structure of your data before compressing it'],
          ['A full-precision answer to compare with', 'Keep an exact baseline to measure recall']
        ] },
        { kind: 'p', text: 'When a chatbot answers from a company\'s documents, the documents have usually been split into chunks, each chunk turned into an embedding of hundreds or thousands of numbers, and the embeddings stored in a vector database. Many such databases compress with product quantisation or something like it. That is one reason the chunk a chatbot retrieves is sometimes a near miss rather than the closest match. Ask an AI assistant to vibe code a semantic search and it will happily plug in a compressed index without mentioning recall at all. Wallsend learners know to ask how many true neighbours survive, and know how to measure it. When a learner writes Python on their own, which is usually in the sixth form or as an adult, we move on to AI agents; Copilot Studio agents are taught one-to-one only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents route for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Neither the Office for National Statistics nor postcodes.io has reviewed or approved this page. It relies on their open data, and the conclusions are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From describing pictures to searching vectors',
    intro: 'We use year groups as a guide only and let the free lesson settle the starting level.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Describing, comparing and noticing what a shorter description leaves out.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games an AI drafts and the child tests piece by piece.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Clustering, search and honest measurement, alongside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI systems at work', p: 'Python first, then retrieval, generative AI and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and compression',
    h2: 'What is product quantisation in AI search?',
    intro: 'Product quantisation is a way of compressing long lists of numbers, such as the embeddings an AI search system stores, by splitting each list into short pieces and replacing every piece with the number of its closest entry in a small learned codebook, so that searches run on a few bytes per item instead of the full list.',
    p1: 'On 729 North Tyneside age profiles, product quantisation at 9 bytes per profile found 91.5% of each Wallsend area\'s true 10 nearest neighbours, where rounding every number to fit the same 9 bytes found 82.0%.',
    p2: 'The catch was scale: its codebooks held 4,608 numbers, more than a third the size of the 13,122-number table they were compressing.',
    closer: 'Wallsend teenagers who have measured recall against bytes ask any AI search tool what it is leaving out. That question comes from building the search themselves, which remains a good reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'Howdon, Willington Quay and Rosehill, together online',
    intro: 'Learners need a computer with a camera and an internet connection that handles video calls.',
    cells: [
      { h3: 'Learner in control', p: 'The learner types and runs every line on a shared screen while the tutor questions.' },
      { h3: 'Placement by trial', p: 'We watch the learner work before recommending a level or course.' },
      { h3: 'A free full lesson', p: 'No card, no shortened taster, and a course suggestion at the end.' },
      { h3: 'Matched groups', p: 'Five to ten learners at the same stage, from across the UK.' },
      { h3: 'Two per week', p: 'Holiday weeks come out of the schedule once you send them.' },
      { h3: 'Clock changes handled', p: 'Your lesson stays at the same UK time through spring and autumn.' }
    ],
    spec: { title: 'Why lessons are online', p: 'A class at one exact level needs a bigger pool of learners than a single town has. Across the UK it is easy to fill.' }
  },

  fees: {
    h2: 'Wallsend lesson costs',
    intro: 'Wallsend learners pay our international rates, used everywhere apart from India.',
    first: 'A complete first lesson at no charge, finishing with a recommendation.',
    group: 'Around eight small-group lessons each month.',
    private: 'Around eight private lessons each month.',
    closer: 'We price in US dollars and do not quote pounds. Payment starts after the trial, once the course and weekly time are agreed. Holidays, missed lessons and changes of format are explained on the pricing page.'
  },

  reviewsH2: 'North East families and learners across the UK, reviewing us on Google',

  book: {
    h2: 'Ask for a free Wallsend lesson',
    intro: 'Send an age or year group and one interest. The trial could be a describe-and-match puzzle, a Scratch game made with AI help, first Python code, or a first nearest-neighbour search.',
    success: 'Thanks. Your Wallsend request is with us and we will reply shortly.'
  },

  faq: {
    h2: 'Wallsend questions',
    intro: 'Product quantisation, the census project, AI, programming and arrangements.',
    items: [
      { q: 'What is the population of Wallsend?', a: 'The ONS counted 45,355 usual residents in the Wallsend built-up area at the 2021 census, within a North Tyneside population of 208,967.' },
      { q: 'Can learners in Wallsend take AI and programming classes online?', a: 'Yes. Lessons run live on video for ages 6 to 67 across Wallsend, Howdon, Willington Quay, Rosehill, Holy Cross and the rest of North Tyneside.' },
      { q: 'What is an embedding?', a: 'A list of numbers that an AI model produces to represent a piece of text, an image or another item, arranged so that similar items get lists that are close together.' },
      { q: 'What is recall in a search?', a: 'The share of the correct results that a search actually returns. If the true 10 nearest items are known and a compressed search finds 9 of them, its recall is 90%.' },
      { q: 'What do learners build in the Wallsend project?', a: 'Age profiles for all 729 output areas in North Tyneside, an exact nearest-neighbour search, and compressed versions using rounding and product quantisation, each scored by how many true neighbours it keeps.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, to every age group. The learner steers an AI assistant and then checks the result line by line.' },
      { q: 'When do learners start on AI agents?', a: 'When they can write Python without support, normally sixth form or adulthood. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Is there support for GCSE and A level?', a: 'Yes, in computer science and maths, aimed at understanding. No grade is promised.' },
      { q: 'What do lessons cost?', a: 'Your first lesson is free. Then it is USD 100 per month in a group or USD 150 per month one-to-one.' },
      { q: 'Can lessons pause for holidays?', a: 'Yes, for whatever dates you give us.' }
    ]
  },

  next: {
    eyebrow: 'Tyneside and beyond',
    h2: 'Other Tyne and Wear pages',
    html: 'Different projects are on the pages for <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-tynemouth">Tynemouth</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-south-shields">South Shields</a>, and the county is covered at <a class="cg-inline-link" href="/coding-classes-in-tyne-and-wear">Tyne and Wear</a>. For the rest of the country, go to the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Contact us on WhatsApp'
  },

  footerHeading: 'Wallsend and Tyne and Wear',
  footerPlaces: [
    { href: '/coding-classes-in-tyne-and-wear', label: 'Tyne and Wear' },
    { href: '/coding-and-ai-classes-in-north-east-england', label: 'North East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wsd .cg-hero-grid { align-items: end; gap: clamp(1.2rem, 3.5vw, 2.7rem); }
.cg-root.cg-wsd .cg-hero h1 { font-weight: 700; letter-spacing: -0.019em; line-height: 1.09; }
.cg-root.cg-wsd .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 4%, transparent); padding: 0.95rem 1.05rem; border-radius: 6px; }
.cg-root.cg-wsd .cg-eyebrow { letter-spacing: 0.1em; font-weight: 660; font-size: 0.81rem; }
.cg-root.cg-wsd .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.014em; }
.cg-root.cg-wsd .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 500; }
.cg-root.cg-wsd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wsd .cg-table th { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.02em; }
.cg-root.cg-wsd .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-wsd .cg-callout { border-left-width: 3px; border-radius: 12px; }
`,

  dossier: {
    curriculumAuthority: 'North Tyneside (E08000022), Census 2021 TS001 usual residents 208,967. ONS 2021 BUA Wallsend 45,355. postcodes.io suburban areas whose nearest postcode lies in the Wallsend BUA: Howdon, Willington Quay, Rosehill, Holy Cross, Willington, Point Pleasant, Howdon Pans (Benton and Holystone resolve to Longbenton: not claimed). England national curriculum.',
    localProject: 'Nomis Census 2021 TS007A (18 five-year age bands) for all 729 North Tyneside output areas; ONS OA21-BUA22 lookup: 163 in Wallsend BUA (residents 108-506, median 271). Vectors of 18 age shares. Queries: 163 Wallsend OAs; truth: 10 nearest OAs by Euclidean distance at full precision. Recall at 10: scalar 8-bit (18 bytes) 98.8%, 4-bit (9) 82.0%, 3-bit (6.75) 66.9%, 2-bit (4.5) 36.2%; product quantisation (k-means codebooks, mean of 5 seeds): 9x256 (9 bytes) 91.5% (91.0-92.0), 9x64 (6.75) 81.1%, 6x256 (6) 84.0%, 6x64 (4.5) 68.4%, 9x16 (4.5) 64.5%, 3x256 (3) 68.0%, 2x256 (2) 58.6%, 2x16 (1) 24.7%. Float64 144 bytes. Codebooks at 256 codes: 4,608 numbers vs 13,122 in the raw table. Age share ranges across Wallsend OAs: under 15 4.5-36.9% (median 15.8), 15-24 3.6-18.5 (10.2), 25-44 8.3-53.6 (26.8), 45-64 7.9-39.7 (27.1), 65+ 0.3-51.6 (17.7). Lesson family: product quantisation, vector compression, recall vs bytes.',
    requiredMentions: [
      'Howdon',
      'Willington Quay',
      'Rosehill',
      'Holy Cross',
      'Point Pleasant',
      'Howdon Pans',
      'product quantisation',
      '91.5%',
      '4,608',
      '13,122'
    ],
    sources: [
      { claim: 'Census 2021 TS007A age by five-year bands, output areas in North Tyneside, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS output area (2021) to built-up area (2022) lookup, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places and nearest postcodes for North Tyneside.', url: 'https://api.postcodes.io/places?q=Howdon' },
      { claim: 'Jegou, Douze and Schmid (2011), Product Quantization for Nearest Neighbor Search, IEEE Transactions on Pattern Analysis and Machine Intelligence 33(1), 117 to 128.', url: 'https://doi.org/10.1109/TPAMI.2010.57' }
    ],
    rejectedClaims: [
      'Which named vector databases or chatbots use product quantisation: none named; described only as common.',
      'Anything about the residents of a given output area beyond published age counts: not claimed.',
      'Battle Hill, Hadrian Park, Carville and Wallsend Green as suburbs: not found in postcodes.io; not listed.',
      'Sum of census counts across output areas presented as a published total: not done.',
      'Named schools and term dates: none named.',
      'Sterling prices: none.'
    ]
  }
};
