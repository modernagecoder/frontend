'use strict';
// Bournemouth (cg- town page, UK cluster Phase 8, towns band A, row 335). Keyword slug per the owner's 2026-09-27
// instruction. Spine: which chapters of Jekyll and Hyde are told in the first person? Anchors (read raw 27 September 2026):
// Project Gutenberg ebook 24332, Nellie Van de Grift Sanchez, "The Life of Mrs. Robert Louis Stevenson": the Stevensons
// "went to Bournemouth for a trial of its climate and conditions"; "the elder Stevenson purchased a house there as a present
// to his daughter-in-law"; "The first thing was to change the name of the place to Skerryvore, in honour of the best known
// of the lighthouses built by the Stevenson family"; in the same Bournemouth chapter, "the dream that suggested Dr. Jekyll
// and Mr. Hyde", the draft he "immediately burned" and "rewrote it from a different point of view". Project Gutenberg
// ebook 43, "The strange case of Dr. Jekyll and Mr. Hyde": ten chapters; the last two are "DR. LANYON'S NARRATIVE" and
// "HENRY JEKYLL'S FULL STATEMENT OF THE CASE".
// Our run (scratchpad bmth/pron.py, 27 September 2026): rate of I/me/my/mine/myself per 1,000 words, whole text vs text
// outside double quotation marks. Whole text: ch1 30.2, ch2 15.2, ch3 70.9, ch4 8.4, ch5 33.0, ch6 22.1, ch7 30.5, ch8 23.5,
// Lanyon 63.3, Jekyll 74.7. Outside quotes: ch1 to ch8 all 0.0; Lanyon 67.8 (123 in 1,813 words); Jekyll 74.7 (520 in 6,957).
// Lesson family: feature-rate detection of narrative voice (stylometry), removing a confounder (dialogue) before measuring;
// screened (stylometry, pronoun, first-person, Stevenson, Jekyll: 0 hits; "classifier" hits elsewhere are different
// models). Chapter titles that mention violence are not named; the page discusses only narrative voice.
// Place facts: Nomis Census 2021 TS007A, Bournemouth, Christchurch and Poole E06000058: total 400,198; 5 to 9 21,212 (5.3%;
// England 5.9%); 20 to 24 26,928 (6.7%; 6.0%); 30 to 34 26,161 (6.5%; 7.0%); 70 to 74 22,596 (5.6%; 5.0%); 75 to 79 17,095
// (4.3%; 3.6%); 85+ 13,713 (3.4%; 2.4%). ONS 2021 BUAs: Bournemouth 196,455; Christchurch 48,985; Merley 5,490 (Poole is
// left for the Poole page).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BOURNEMOUTH', label: 'Bournemouth', blurb: 'Coding and AI classes for Bournemouth, with a project that finds the first-person chapters of Jekyll and Hyde by counting pronouns.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-bournemouth',
  code: 'bmt',
  accent: '#7A5055',
  accentRationale: 'Bournemouth: a weathered brick rose (5.45:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Bournemouth',
    eyebrow: 'Bournemouth, Dorset, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dorset' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Dorset', href: '/coding-classes-in-dorset' },
    { label: 'South West', href: '/coding-and-ai-classes-in-south-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bournemouth, England',
  title: 'Coding and AI Classes in Bournemouth | Online Python, 6 to 67',
  description: 'Online coding, AI and Python classes for Bournemouth and Christchurch learners aged 6 to 67, taught live in small groups or one-to-one. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Bournemouth, and a Python project that detects the first-person chapters of Jekyll and Hyde from pronoun rates.',
  twitterDescription: 'Bournemouth coding, AI and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Bournemouth',
    description: 'Online coding, AI, Python and mathematics for children, teenagers and adults in Bournemouth, taught live at a level that fits.'
  },

  h1: 'Coding and AI classes in Bournemouth',
  capsuleQ: 'Where are the best coding and AI classes for Bournemouth learners?',
  capsule: 'The council area of Bournemouth, Christchurch and Poole had 400,198 residents in 2021, and the Bournemouth built-up area alone 196,455. Its age profile is unusual: people in their early twenties are above the England share, and so is every band from 65 upwards, while children aged 5 to 9 are fewer. Our tutors in India teach coding, AI, Python and maths in live online lessons for anyone from 6 to 67, privately or in classes of five to ten at a common stage. The first lesson is free and points to the right course. The Bournemouth project reads a famous novella written by a Bournemouth resident. Staying on costs USD 100 a month for a group or USD 150 a month one-to-one.',
  lead: 'Robert Louis Stevenson came to Bournemouth for its climate, and his father bought the couple a house there, which they renamed Skerryvore after a lighthouse built by the Stevenson family. In the chapter of her biography that covers those Bournemouth years, Nellie Van de Grift Sanchez tells how Stevenson dreamed the idea for Dr. Jekyll and Mr. Hyde, burned his first draft and rewrote it "from a different point of view". Point of view is exactly what a program can measure. Most of the book is told from outside, but its last two chapters are documents written by characters in their own voices. Could a computer tell which chapters are first-person just by counting the words I, me and my? A Bournemouth learner can find out, and discover why the first attempt fails.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Bournemouth.',

  picks: {
    eyebrow: 'Bournemouth starting courses',
    h2: 'Courses Bournemouth learners begin with',
    intro: 'Choose one to fit age and interest. Each starts with a free live lesson, booked without card details.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with characters, dialogue and story games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python programs with words and sentences, and simple AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Complete Python for teenagers, including the narrator detector.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python for adults from scratch, into text analysis and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bournemouth, Christchurch and Poole',
      h2: 'Students and retirees side by side',
      intro: 'Six age bands for the council area from census table TS007A (2021), via Nomis, with England alongside.',
      body: [
        { kind: 'table', caption: 'Bournemouth, Christchurch and Poole against England, six bands, Census 2021 TS007A', head: ['Age', 'Council area count', 'Council area %', 'England %'], rows: [
          ['5 to 9', '21,212', '5.3%', '5.9%'],
          ['20 to 24', '26,928', '6.7%', '6.0%'],
          ['30 to 34', '26,161', '6.5%', '7.0%'],
          ['70 to 74', '22,596', '5.6%', '5.0%'],
          ['75 to 79', '17,095', '4.3%', '3.6%'],
          ['85 and over', '13,713', '3.4%', '2.4%']
        ] },
        { kind: 'p', text: 'Young adults and older residents both stand above England, and school-age children below. The ONS counts the Bournemouth built-up area at 196,455 and Christchurch at 48,985, with smaller areas such as Merley at 5,490, all inside the council area. Schools follow the national curriculum for England, and our lessons pause for the holidays you send us.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bournemouth project',
      h2: 'A narrator detector for Jekyll and Hyde',
      intro: 'Count first-person pronouns, but only after removing the dialogue.',
      body: [
        { kind: 'p', text: 'The learner splits the Project Gutenberg text into its ten chapters and, for each, counts the words I, me, my, mine and myself per 1,000 words. The idea is simple: a chapter written as someone\'s own account should be full of I. The results are confusing. Chapter 3 scores 70.9 per 1,000 words, higher than Dr. Lanyon\'s first-person narrative at 63.3. A detector with a threshold of 50 would call chapter 3 first-person and would be wrong.' },
        { kind: 'table', caption: 'Our Python pronoun rates for Jekyll and Hyde, per 1,000 words, 27 September 2026', head: ['Chapter', 'All text', 'Outside quotation marks', 'Narrator'], rows: [
          ['Chapter 1', '30.2', '0.0', 'Outside observer'],
          ['Chapter 3', '70.9', '0.0', 'Outside observer'],
          ['Chapter 8', '23.5', '0.0', 'Outside observer'],
          ['Chapter 9, Lanyon\'s narrative', '63.3', '67.8', 'First person'],
          ['Chapter 10, Jekyll\'s statement', '74.7', '74.7', 'First person']
        ] },
        { kind: 'p', text: 'The problem is dialogue. Characters in every chapter say "I" when they speak, so a talkative chapter looks first-person even when the narrator never uses the word. The fix is to remove everything inside quotation marks before counting. Now the picture is perfectly clear: chapters 1 to 8 score exactly 0.0 outside speech, while Lanyon\'s narrative scores 67.8 and Jekyll\'s statement 74.7. The narrator of the first eight chapters never once uses I outside quoted speech.' },
        { kind: 'p', text: 'The learner writes the rule down honestly: remove quoted speech, count first-person pronouns, and call a chapter first-person above 20 per 1,000 words. Tests check a made-up passage with lots of dialogue but a hidden narrator, and one written as a letter. The learner also notes a limit: Jekyll\'s statement contains no quotation marks at all, so the count there is unchanged, and a book that used single quotation marks for speech would need a different rule.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Colour every I in a page of a story, then colour only the ones outside speech marks.' },
          { h3: 'Ages 11 to 15', p: 'Count pronoun rates per chapter in Python and try both versions.' },
          { h3: 'Ages 15 and up', p: 'Build the full detector, choose a threshold, and test it on other novels.' }
        ] },
        { kind: 'callout', h3: 'Stevenson\'s text, our detector', p: 'The novella and the biography are Project Gutenberg editions. The pronoun counts, rates and rules are ours.' }
      ]
    },
    {
      id: 'skerryvore', tint: 'deep', eyebrow: 'Why Skerryvore',
      h2: 'A Bournemouth house named after a lighthouse',
      intro: 'What Nellie Van de Grift Sanchez records.',
      body: [
        { kind: 'table', caption: 'The Stevensons in Bournemouth, from The Life of Mrs. Robert Louis Stevenson', head: ['Detail', 'What the biography says'], rows: [
          ['Why they came', 'For a trial of Bournemouth\'s climate and conditions'],
          ['The house', 'Bought by the elder Stevenson as a present to his daughter-in-law'],
          ['The name', 'Skerryvore, after a lighthouse built by the Stevenson family'],
          ['The house itself', 'An ivy-covered brick cottage with about half an acre of garden'],
          ['The first draft', 'Burned after Fanny Stevenson\'s written objections'],
          ['The rewrite', 'From a different point of view']
        ] },
        { kind: 'p', text: 'Measuring the voice of a text is real work in computing. Tools that sort customer messages, detect whether a review is from a customer or a company, or help researchers test who wrote an anonymous document all start from simple counts like these. The lesson from Jekyll and Hyde carries straight over: remove whatever confuses the signal, here the dialogue, before trusting the number. A Bournemouth learner who has built this detector has done a small piece of stylometry.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with Project Gutenberg or the ONS. The texts and data are theirs; the detector, and any mistake in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From colouring pronouns to text analysis',
    intro: 'Year groups are a guide; the free lesson sets the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Stories in blocks', p: 'Block coding with characters and speech.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and words', p: 'Strings, counting and simple rules.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Text and AI', p: 'Text analysis and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Real text data', p: 'Adult Python for text and data work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and signals',
    h2: 'Does an AI remove the noise before it measures?',
    intro: 'A signal mixed with something else gives a misleading answer.',
    p1: 'Ask a chatbot which chapters of a book are first-person and it may answer from memory, or count pronouns without thinking about dialogue. Either way, chapter 3 of Jekyll and Hyde is an easy trap.',
    p2: 'A Bournemouth learner who has watched 70.9 fall to 0.0 knows to ask what else might be inflating any count.',
    closer: 'Separating the signal from the noise is a strong reason for Bournemouth teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'Bournemouth and Christchurch, online',
    intro: 'Every neighbourhood joins by live video.',
    cells: [
      { h3: 'Learner-led code', p: 'The student types each program while the tutor follows the shared screen and asks questions.' },
      { h3: 'The right start', p: 'Year 3 or Year 12, each learner begins where their school year and trial show, with their exam board named.' },
      { h3: 'Free opening session', p: 'The first full lesson costs nothing and ends with a clear recommendation.' },
      { h3: 'Classes at one level', p: 'Groups of five to ten UK learners at the same stage.' },
      { h3: 'Two lessons weekly', p: 'Twice a week in term; nothing in the holidays.' },
      { h3: 'Fixed lesson hour', p: 'UK clock changes are absorbed by our teachers.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Bournemouth learners at one level, free at the same time, rarely live nearby. Online groups solve that.' }
  },

  fees: {
    h2: 'Bournemouth fees',
    intro: 'Bournemouth families pay what every family outside India pays.',
    first: 'A full free lesson, finishing with a course suggestion.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live private lessons each month.',
    closer: 'All fees are in US dollars, not sterling. We begin billing only after the trial has agreed a course and a weekly time; holidays, missed sessions and format changes are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from our families',

  book: {
    h2: 'Book a free Bournemouth lesson',
    intro: 'Let us know the learner\'s age or school year and one interest. A trial could be a Scratch story game, a first Python program, an AI project, or the Jekyll and Hyde narrator detector.',
    success: 'Thank you. Your Bournemouth request is with us.'
  },

  faq: {
    h2: 'Bournemouth questions',
    intro: 'The town, the Stevenson project and practical details.',
    items: [
      { q: 'What is the population of Bournemouth?', a: 'The ONS gives 196,455 for the Bournemouth built-up area in 2021; the whole council area of Bournemouth, Christchurch and Poole had 400,198.' },
      { q: 'Can Bournemouth learners take coding and AI classes online?', a: 'Yes. Learners aged 6 to 67 in Bournemouth and Christchurch join live online coding, AI, Python and maths lessons.' },
      { q: 'What is the Jekyll and Hyde project?', a: 'Learners count first-person pronouns per chapter in Python and discover that dialogue must be removed before the count can identify first-person chapters.' },
      { q: 'What is stylometry?', a: 'Measuring features of writing, such as word or pronoun rates, to learn something about how or by whom a text was written.' },
      { q: 'What was Stevenson\'s link with Bournemouth?', a: 'His biography of his wife records that his father bought them a house there, which they named Skerryvore.' },
      { q: 'Are lessons held in Bournemouth?', a: 'They are online, so any part of the council area is covered.' },
      { q: 'Is there help for GCSE and A level?', a: 'Yes, for maths and computing, focused on understanding; we never promise grades.' },
      { q: 'Who can join?', a: 'Anyone aged 6 to 67.' },
      { q: 'What does it cost?', a: 'The first lesson is free, then USD 100 monthly in a group or USD 150 monthly one-to-one.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes; tell us your dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Bournemouth',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West</a> page lists the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'Chat on WhatsApp'
  },

  footerHeading: 'Bournemouth and Dorset',
  footerPlaces: [
    { href: '/coding-classes-in-dorset', label: 'Dorset' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bmt .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-bmt .cg-hero h1 { font-weight: 760; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-bmt .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bmt .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bmt .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-bmt .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-bmt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bmt .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-bmt .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-bmt .cg-callout { border-radius: 12px; border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Bournemouth, Christchurch and Poole (E06000058). Nomis Census 2021 TS007A: total 400,198; 5 to 9 21,212 (5.3%, England 5.9%); 20 to 24 26,928 (6.7%, 6.0%); 30 to 34 26,161 (6.5%, 7.0%); 70 to 74 22,596 (5.6%, 5.0%); 75 to 79 17,095 (4.3%, 3.6%); 85+ 13,713 (3.4%, 2.4%). ONS 2021 BUAs: Bournemouth 196,455; Christchurch 48,985; Merley 5,490. Project Gutenberg 24332, Nellie Van de Grift Sanchez, The Life of Mrs. Robert Louis Stevenson: went "to Bournemouth for a trial of its climate and conditions"; house bought by "the elder Stevenson"; renamed "Skerryvore, in honour of the best known of the lighthouses built by the Stevenson family"; draft burned and rewritten "from a different point of view". Project Gutenberg 43, Jekyll and Hyde.',
    localProject: 'Pronoun rates per 1,000 words (I/me/my/mine/myself), all text vs outside quotes: ch1 30.2/0.0; ch2 15.2/0.0; ch3 70.9/0.0; ch4 8.4/0.0; ch5 33.0/0.0; ch6 22.1/0.0; ch7 30.5/0.0; ch8 23.5/0.0; Lanyon 63.3/67.8; Jekyll 74.7/74.7. Lesson family: narrative voice detection (stylometry), removing a confounder.',
    requiredMentions: [
      '196,455',
      '48,985',
      'Merley',
      'Skerryvore',
      'Jekyll',
      'first-person',
      'Lanyon',
      'Nellie Van de Grift Sanchez',
      'stylometry'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Bournemouth, Christchurch and Poole and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Nellie Van de Grift Sanchez, The Life of Mrs. Robert Louis Stevenson (ebook 24332).', url: 'https://www.gutenberg.org/ebooks/24332' },
      { claim: 'Project Gutenberg, Robert Louis Stevenson, The strange case of Dr. Jekyll and Mr. Hyde (ebook 43).', url: 'https://www.gutenberg.org/ebooks/43' }
    ],
    rejectedClaims: [
      'That Jekyll and Hyde was written in a particular room or year: not claimed beyond the biography.',
      'The novella\'s violent episodes and chapter titles naming them: not described.',
      'Graves and memorials in Bournemouth: not mentioned.',
      'Poole figures: left for the Poole page.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
