'use strict';
// Basingstoke (cg- town page, UK cluster Phase 8, towns band A, row 334). Keyword slug per the owner's 2026-09-27
// instruction. Spine: how many sentences are in Pride and Prejudice? Anchors (read raw 27 September 2026): Project Gutenberg
// ebook 22536, William Austen-Leigh (and R. A. Austen-Leigh), "Jane Austen, Her Life and Letters: A Family Record" (1913):
// "Steventon is a small village tucked away among the Hampshire Downs, about seven miles south of Basingstoke"; chronology
// "1775, Dec. 16 Birth, at Steventon"; "1796 First Impressions (Pride and Prejudice) begun"; "First Impressions (original of
// Pride and Prejudice), begun October 1796, ended August 1797"; the Steventon rectory room "in which the first versions of
// Sense and Sensibility and Pride and Prejudice were composed"; "assemblies at Basingstoke". postcodes.io places: Steventon,
// Village, Basingstoke and Deane (a second Steventon is in Oxfordshire; the book fixes the Hampshire one). Project Gutenberg
// ebook 1342, Jane Austen, "Pride and Prejudice".
// Our run (scratchpad bsk/sb.py, 27 September 2026): text from "It is a truth universally" to the END marker, illustration
// tags removed; 122,978 words by our count. Naive split after . ! ? plus space: 5,767 sentences, mean 21.32 words, median
// 17. Protecting "Mr." (781), "Mrs." (343) and "St." (7) only: 4,636, mean 26.53. Protecting abbreviations AND splitting
// after a closing quotation mark: 5,776, mean 21.29, median 17. The naive count is close by accident: 1,131 false splits at
// abbreviations almost cancel about 1,140 missed splits after closing quotes. 23 one-word sentences; 16 over 100 words.
// Lesson family: sentence boundary detection, abbreviations, compensating errors; screened (sentence boundary, abbreviation,
// sentence length: 0 hits; Bath used cosine similarity on Austen's Bath novels, a different technique).
// Place facts: Nomis Census 2021 TS007A, Basingstoke and Deane E07000084: total 185,152; 5 to 9 11,550 (6.2%; England
// 5.9%); 15 to 19 9,089 (4.9%; 5.7%); 20 to 24 9,233 (5.0%; 6.0%); 45 to 49 12,935 (7.0%; 6.4%); 50 to 54 13,695 (7.4%;
// 6.9%); 85+ 3,862 (2.1%; 2.4%). ONS 2021 BUAs wholly inside: Basingstoke 117,210; Tadley 14,760; Whitchurch 5,290; Oakley
// 5,265; Overton 4,350; Old Basing 3,835.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BASINGSTOKE', label: 'Basingstoke', blurb: 'AI and programming classes for Basingstoke, with a project that counts the sentences in Pride and Prejudice, begun at nearby Steventon.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-basingstoke',
  code: 'bsk',
  accent: '#7A3764',
  accentRationale: 'Basingstoke: a Regency plum ribbon (6.62:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Basingstoke',
    eyebrow: 'Basingstoke, Hampshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hampshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Hampshire', href: '/coding-classes-in-hampshire' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Basingstoke, England',
  title: 'AI and Programming Classes in Basingstoke | Coding for 6 to 67',
  description: 'Online AI, programming, Python and coding classes for Basingstoke, Tadley, Overton and Oakley learners aged 6 to 67, taught live. The first lesson is free.',
  ogDescription: 'Live online AI and programming classes for Basingstoke, and a Python project that counts the sentences in Pride and Prejudice and finds two bugs cancelling out.',
  twitterDescription: 'Basingstoke AI, programming and coding classes, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Basingstoke',
    description: 'Online AI, programming, Python and mathematics for children, teenagers and adults in Basingstoke and Deane, taught live and placed by level.'
  },

  h1: 'AI and programming classes in Basingstoke',
  capsuleQ: 'What are the best AI and programming classes in Basingstoke?',
  capsule: 'At the 2021 census Basingstoke and Deane counted 185,152 people, 117,210 of them in the Basingstoke built-up area and 14,760 in Tadley. Adults in their late forties and early fifties are above the England share here, as are children aged 5 to 9, while late teens and early twenties are well below it. Our India-based tutors take learners from 6 to 67 through AI, programming, Python and maths in real-time video lessons, privately or in same-level classes of five to ten. A free first lesson settles the course. The Basingstoke project takes a famous novel begun a short way from the town and counts its sentences. From then on, shared classes are USD 100 monthly and one-to-one sessions USD 150 monthly.',
  lead: 'In their 1913 family record, William and Richard Austen-Leigh describe Steventon as "a small village tucked away among the Hampshire Downs, about seven miles south of Basingstoke". Jane Austen was born there in December 1775, and it was at Steventon, they record, that First Impressions was begun in October 1796, the novel that became Pride and Prejudice. So here is a question a program should answer easily: how many sentences does Pride and Prejudice contain? Split the text wherever a full stop, question mark or exclamation mark is followed by a space. Simple. Except the book mentions "Mr." 781 times and "Mrs." 343 times, and quoted speech hides many endings behind a quotation mark. A Basingstoke learner can fix both, and discover something unsettling along the way.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Basingstoke.',

  picks: {
    eyebrow: 'Basingstoke picks',
    h2: 'First courses in Basingstoke',
    intro: 'Choose by age and interest. The first live lesson of each course is free, and booking needs no card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with stories, words and simple sorting.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First real Python, working with text, plus small AI projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the sentence-counting project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from zero, through text processing and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Basingstoke and Deane',
      h2: 'A borough of established families',
      intro: 'Six bands from census table TS007A (2021) for Basingstoke and Deane, via Nomis, beside England.',
      body: [
        { kind: 'table', caption: 'Selected ages in Basingstoke and Deane compared with England (census 2021, TS007A)', head: ['Band', 'Borough count', 'Borough share', 'England share'], rows: [
          ['5 to 9', '11,550', '6.2%', '5.9%'],
          ['15 to 19', '9,089', '4.9%', '5.7%'],
          ['20 to 24', '9,233', '5.0%', '6.0%'],
          ['45 to 49', '12,935', '7.0%', '6.4%'],
          ['50 to 54', '13,695', '7.4%', '6.9%'],
          ['85 and over', '3,862', '2.1%', '2.4%']
        ] },
        { kind: 'p', text: 'Parents in mid-life and primary-age children are more common than in England, while young adults are noticeably fewer. Around Basingstoke the ONS lists Tadley at 14,760, Whitchurch at 5,290, Oakley at 5,265, Overton at 4,350 and Old Basing at 3,835, all inside the borough. Hampshire schools follow England\'s national curriculum, and our timetable goes quiet for each holiday week you mark.' },
        { kind: 'callout', h3: 'County and region', p: 'The <a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Basingstoke project',
      h2: 'Counting sentences in Pride and Prejudice',
      intro: 'Sentence boundary detection, and two bugs that hide each other.',
      body: [
        { kind: 'p', text: 'The learner downloads the Project Gutenberg text, keeps everything from "It is a truth universally acknowledged" to the end of the novel, and removes the illustration notes. That leaves 122,978 words by our count. The first program splits after every full stop, question mark or exclamation mark that is followed by a space. It reports 5,767 sentences, averaging 21.32 words. That looks reasonable, and a less curious programmer would stop there.' },
        { kind: 'table', caption: 'Our Python sentence counts for Pride and Prejudice, 27 September 2026', head: ['Splitting rule', 'Sentences', 'Mean words', 'What went wrong'], rows: [
          ['Split after . ! ? and a space', '5,767', '21.32', 'Two errors, nearly cancelling'],
          ['Also protect Mr., Mrs. and St.', '4,636', '26.53', 'Now misses endings inside quotes'],
          ['Protect abbreviations and split after closing quotes', '5,776', '21.29', 'The most careful rule here']
        ] },
        { kind: 'p', text: 'Then the learner prints the shortest "sentences" and finds fragments such as "My dear Mr." and "for Mrs.". Every Mr. and Mrs. has been treated as the end of a sentence: 781 plus 343, and 7 more for St., 1,131 false breaks. Protecting those abbreviations fixes that, yet the count drops to 4,636, far lower than before. Why? Because in dialogue a sentence often ends with a full stop followed by a closing quotation mark, and the rule only looked for a full stop followed by a space. Adding that case gives 5,776.' },
        { kind: 'p', text: 'Here is the unsettling part. The naive count of 5,767 was within ten of the careful count of 5,776, not because it was right, but because 1,131 false splits almost exactly cancelled about 1,140 missed ones. A program can be wrong in two ways and still print a believable number. The learner writes tests for each case separately, an abbreviation, a quoted ending, a question mark inside quotes, so that each rule is checked on its own rather than trusting a total that happens to look fine.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Count the sentences on one page of a book by hand, then argue about the tricky ones.' },
          { h3: 'Ages 11 to 15', p: 'Write the naive splitter in Python and print its shortest sentences.' },
          { h3: 'Ages 15 and up', p: 'Handle abbreviations and quotes, test each rule, and measure sentence length.' }
        ] },
        { kind: 'callout', h3: 'Austen\'s text, our splitter', p: 'Pride and Prejudice and the Austen-Leigh family record are Project Gutenberg editions. The sentence rules, counts and averages are our own.' }
      ]
    },
    {
      id: 'steventon', tint: 'deep', eyebrow: 'Why Steventon',
      h2: 'A novel begun near Basingstoke',
      intro: 'What the 1913 family record says.',
      body: [
        { kind: 'table', caption: 'From Jane Austen, Her Life and Letters: A Family Record (1913), Project Gutenberg edition', head: ['Detail', 'What the book says'], rows: [
          ['Where Steventon is', 'Among the Hampshire Downs, about seven miles south of Basingstoke'],
          ['Birth', '16 December 1775, at Steventon'],
          ['First Impressions', 'Begun October 1796, ended August 1797'],
          ['What it became', 'Pride and Prejudice, published January 1813'],
          ['Where it was written', 'The rectory room at Steventon, with Sense and Sensibility'],
          ['Basingstoke', 'Where the family went to the assemblies']
        ] },
        { kind: 'p', text: 'Sentence splitting sits quietly under a great deal of software. Search engines, grammar checkers, translation tools, text-to-speech readers and the language models behind chatbots all need to know where one sentence ends and the next begins, and all of them meet Mr., Mrs., decimal points and quotation marks. A Basingstoke learner who has fixed Austen\'s abbreviations has met, in miniature, a problem that professional language engineers still test for.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with Project Gutenberg or the ONS. The texts and census data are theirs; the splitter, and any mistake in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From counting sentences by hand to language tools',
    intro: 'The year bands are rough; the trial finds the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Words and blocks', p: 'Block coding with stories, speech and simple rules.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python with text', p: 'Strings, splitting and counting in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Language and AI', p: 'Text processing and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Practical text work', p: 'Adult Python for text and data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and language',
    h2: 'Can you trust a number that looks right?',
    intro: 'Plausible output is not the same as correct output.',
    p1: 'Ask a chatbot how many sentences are in a novel and it will give a confident figure. It may even be close, for the same reason the naive splitter was close: errors that happen to cancel.',
    p2: 'A Basingstoke learner who has seen 5,767 against 5,776 knows to test each rule separately instead of trusting a believable total.',
    closer: 'Testing the parts instead of admiring the total is a strong reason for Basingstoke teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Tadley to Old Basing, by live video',
    intro: 'From Kingsclere to Chineham, the lesson arrives on a screen at home.',
    cells: [
      { h3: 'Their own keystrokes', p: 'Programs are built by the learner, line by line, while the tutor watches over screen share and nudges with a question when needed.' },
      { h3: 'A level that fits', p: 'Year 4 pupils and Year 13 students alike begin at a point set by their school year and the trial, with their own exam board in view.' },
      { h3: 'Nothing to pay first', p: 'A complete opening lesson costs nothing, and you finish it knowing exactly which course we suggest and why.' },
      { h3: 'One-stage groups', p: 'Five to ten UK learners, all at the same level.' },
      { h3: 'Twice weekly in term', p: 'Two lessons a week during term; school holidays kept free.' },
      { h3: 'Constant time', p: 'Our teachers absorb the UK clock changes, so your lesson stays put.' }
    ],
    spec: { title: 'Why groups are online', p: 'Five Basingstoke learners at one level, free at the same time, seldom live close together. Online groups give each the right class.' }
  },

  fees: {
    h2: 'Basingstoke fees',
    intro: 'Our fee for Basingstoke matches the one used in each country outside India.',
    first: 'A whole lesson free, ending with a clear recommendation.',
    group: 'About eight live small-group lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'Fees are in US dollars, not sterling. Money changes hands only once the trial lesson has pointed to a course and a weekday slot has been chosen. Term breaks, sick days and a switch from class to solo tuition are all explained under pricing.'
  },

  reviewsH2: 'Reviews posted on Google',

  book: {
    h2: 'Book a free Basingstoke lesson',
    intro: 'Send us an age or year group and one thing the learner loves. Possible trials: a Scratch storyboard, a first Python script, a small AI build, or splitting Austen into sentences.',
    success: 'Thank you. Your Basingstoke request has reached us.'
  },

  faq: {
    h2: 'Basingstoke questions',
    intro: 'The town, the Austen project and how lessons work.',
    items: [
      { q: 'What is the population of Basingstoke?', a: 'The ONS gives 117,210 for the Basingstoke built-up area in 2021; the whole borough of Basingstoke and Deane had 185,152.' },
      { q: 'Can Basingstoke learners take AI and programming classes online?', a: 'Yes. Learners aged 6 to 67 across Basingstoke and Deane join live online AI, programming, Python and maths classes.' },
      { q: 'What is the Pride and Prejudice project?', a: 'Learners write a Python sentence splitter for the novel, fix abbreviations like Mr. and Mrs. and quoted endings, and find that two bugs almost cancelled.' },
      { q: 'What is sentence boundary detection?', a: 'Working out where each sentence ends, which is harder than it looks because full stops also appear in abbreviations and numbers.' },
      { q: 'What is Jane Austen\'s link with Basingstoke?', a: 'The 1913 Austen-Leigh family record places her birthplace, Steventon, about seven miles south of Basingstoke, where First Impressions was begun.' },
      { q: 'Do lessons take place in Basingstoke?', a: 'They run online, so Tadley, Overton, Oakley and the town are covered equally.' },
      { q: 'Is there support for exam years?', a: 'GCSE and A level students get maths and computing help aimed at genuine understanding, never at a promised grade.' },
      { q: 'Is there an age limit?', a: 'Six-year-olds, sixty-seven-year-olds and everyone between.' },
      { q: 'What do Basingstoke families pay?', a: 'You pay nothing for the trial. A place in a class then costs USD 100 monthly, and private lessons USD 150 monthly.' },
      { q: 'Do lessons run in school holidays?', a: 'They pause; share the holiday calendar with us.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Basingstoke',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire</a> page covers the county, <a class="cg-inline-link" href="/best-coding-class-in-reading">Reading</a> follows copy-chain errors, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page lists the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Basingstoke and Hampshire',
  footerPlaces: [
    { href: '/coding-classes-in-hampshire', label: 'Hampshire' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bsk .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-bsk .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.07; font-style: italic; }
.cg-root.cg-bsk .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bsk .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bsk .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.018em; }
.cg-root.cg-bsk .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-bsk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bsk .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.79rem; }
.cg-root.cg-bsk .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-bsk .cg-callout { border-left-width: 4px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Basingstoke and Deane (E07000084). Nomis Census 2021 TS007A: total 185,152; 5 to 9 11,550 (6.2%, England 5.9%); 15 to 19 9,089 (4.9%, 5.7%); 20 to 24 9,233 (5.0%, 6.0%); 45 to 49 12,935 (7.0%, 6.4%); 50 to 54 13,695 (7.4%, 6.9%); 85+ 3,862 (2.1%, 2.4%). ONS 2021 BUAs: Basingstoke 117,210; Tadley 14,760; Whitchurch 5,290; Oakley 5,265; Overton 4,350; Old Basing 3,835. Project Gutenberg 22536, Austen-Leigh, Jane Austen, Her Life and Letters (1913): Steventon "about seven miles south of Basingstoke"; birth 1775 Dec 16 at Steventon; First Impressions begun October 1796, ended August 1797; "assemblies at Basingstoke". postcodes.io places: Steventon, Village, Basingstoke and Deane. Project Gutenberg 1342, Pride and Prejudice.',
    localProject: 'Sentence boundary detection: 122,978 words; naive 5,767 (mean 21.32, median 17); abbreviations protected 4,636 (26.53); abbreviations plus closing quotes 5,776 (21.29, median 17); Mr. 781, Mrs. 343, St. 7 = 1,131 false splits vs about 1,140 missed quote endings. Lesson family: sentence boundaries, abbreviations, compensating errors.',
    requiredMentions: [
      '117,210',
      'Tadley',
      'Overton',
      'Old Basing',
      'Steventon',
      'William and Richard Austen-Leigh',
      'First Impressions',
      'sentence boundary',
      '5,776'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Basingstoke and Deane and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Austen-Leigh, Jane Austen, Her Life and Letters: A Family Record (ebook 22536).', url: 'https://www.gutenberg.org/ebooks/22536' },
      { claim: 'Project Gutenberg, Jane Austen, Pride and Prejudice (ebook 1342).', url: 'https://www.gutenberg.org/ebooks/1342' }
    ],
    rejectedClaims: [
      'Distances and travel times: only the 1913 book\'s own "about seven miles", quoted as the book\'s.',
      'The Steventon rectory today: not claimed.',
      'Austen\'s later homes and Bath years: left to the Bath page.',
      'Named schools and school term dates: none named or read.',
      'Local employers: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
