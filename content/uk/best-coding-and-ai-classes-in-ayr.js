'use strict';
// Ayr (cg- town page, UK cluster Phase 8, towns band A, row 413). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does a computer find exactly what differs between
// two versions of a text? (global sequence alignment, the Needleman-Wunsch algorithm, gaps and substitutions, and why a
// position-by-position comparison fails after one shift).
// Data (read 29 September 2026): Robert Burns, "The Brigs of Ayr", in two Project Gutenberg editions: ebook 1279 "Poems and
// Songs of Robert Burns" (lines 10472 to 10752, inscription "Inscribed to John Ballantine, Esq., Ayr.") and ebook 18500 "The
// Complete Works of Robert Burns" with Allan Cunningham (lines 13918 to 14178, "INSCRIBED TO J. BALLANTYNE, ESQ., AYR.").
// Footnote paragraphs and footnote markers removed; curly apostrophes made straight; words compared in lower case.
// Our run (scratchpad ayr/nw.py): 1,839 words in each version. Word-level Needleman-Wunsch (match +2, mismatch -1, gap
// -2), a table of 3,385,600 cells: 1,780 words identical, 55 substituted, 4 only in ebook 1279, 4 only in ebook 18500.
// Comparing word 1 with word 1, word 2 with word 2 and so on: only 787 match. First difference at word 45: "grey" / "gray".
// Substitutions include through / thro', other / ither, very / vera (twice), even / ev'n, dexcried / descry'd, bonie /
// bonnie, Ballantine / Ballantyne, rolling / roaring, spate / speat. (A day / date pairing is an alignment artefact across
// two different lines and is not reported.) Hyphenated heart-felt and sheep-shank in ebook 18500 split into two words.
// Lesson family: global sequence alignment (Needleman-Wunsch), edit scripts, gap penalties. Screened: "Needleman", "Brigs
// of Ayr" 0 hits; Gloucester's "sequence alignment" mention is dynamic time warping on time series, a different object.
// East Ayrshire used Gutenberg 1279 for verse-form detection; this page uses a different poem and a different method.
// Place facts: NRS mid-2020 localities: Ayr 46,260 (South Ayrshire page registers the council figures). postcodes.io
// (South Ayrshire, KA7/KA8) suburban areas: Alloway, Belmont, Castlehill, Dalmilling, Doonfoot, Forehill, Heathfield,
// Holmston, Kincaidston, Lochside, Masonhill, Newton on Ayr, Seafield, Wallacetown, Whitletts.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'AYR', label: 'Ayr', blurb: 'Coding and AI classes for Ayr, with a project that lines up two printed editions of Burns\'s "The Brigs of Ayr" word by word to find every difference.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-ayr',
  code: 'ayr',
  accent: '#6B3430',
  accentRationale: 'Ayr: a dark brick red (7.84:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Ayr',
    eyebrow: 'Ayr, South Ayrshire, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'South Ayrshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'South Ayrshire', href: '/coding-classes-in-south-ayrshire' },
    { label: 'East Ayrshire', href: '/coding-classes-in-east-ayrshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ayr, Scotland',
  title: 'Coding and AI Classes in Ayr | Python, Vibe Coding, Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Ayr, Alloway, Doonfoot and Whitletts learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Coding and AI classes for Ayr, with a project that aligns two editions of "The Brigs of Ayr" word by word to find every change between them.',
  twitterDescription: 'Ayr coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Ayr',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Ayr and South Ayrshire, taught live with close reading and reasoning first.'
  },

  h1: 'Coding and AI classes in Ayr',
  capsuleQ: 'Where can Ayr learners find the best coding and AI classes?',
  capsule: 'South Ayrshire\'s largest locality is Ayr, put at 46,260 residents by National Records of Scotland for mid-2020. Alloway, Doonfoot, Whitletts, Kincaidston, Holmston and Wallacetown are among the suburbs recorded in the KA7 and KA8 districts. Coding, AI, Python, vibe coding and maths are open to anyone from six to 67, taught on camera by tutors in India, privately or alongside four to nine others at the same level. Close reading and clear reasoning come first, so learners can check what an AI has changed in their work. The trial lesson is free, and at the end we suggest a course. The Ayr project takes two printed editions of Robert Burns\'s poem "The Brigs of Ayr" and has a program line them up word by word to find every difference. From the second month, group lessons cost USD 100 and private lessons USD 150.',
  lead: 'When two versions of a document differ, the tempting check is to compare them word by word: first with first, second with second. It works until one word is added or removed, after which everything is out of step and almost nothing seems to match. The fix is alignment: sliding the two sequences against each other, allowing gaps, so that the words which do correspond line up. The classic method, published by Needleman and Wunsch in 1970 for comparing protein sequences, fills in a table of top partial scores and then traces back the cheapest set of edits. Here it is applied to "The Brigs of Ayr" as printed in two different Burns editions on Project Gutenberg.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Ayr?',

  picks: {
    eyebrow: 'Ayr course picks',
    h2: 'Ayr courses in reading, reasoning, Python and AI',
    intro: 'Choose by age and interest. Every course opens with a free live lesson, and no card is needed.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: spotting differences carefully and explaining exactly what changed.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and checked piece by piece.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first programs to text processing, including the Burns alignment.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How language models rewrite text, how to check their edits, and AI agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ayr and South Ayrshire',
      h2: 'Ayr, Alloway, Doonfoot and Whitletts',
      intro: 'The NRS estimate for Ayr, and suburbs listed in the KA7 and KA8 postcode districts.',
      body: [
        { kind: 'table', caption: 'Ayr in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Ayr locality, mid-2020', '46,260']
        ] },
        { kind: 'p', text: 'Postcodes.io lists Alloway, Belmont, Castlehill, Dalmilling, Doonfoot, Forehill, Heathfield, Holmston, Kincaidston, Lochside, Masonhill, Newton on Ayr, Seafield, Wallacetown and Whitletts as suburban areas of South Ayrshire in KA7 and KA8. Ayrshire classrooms run on the Curriculum for Excellence, so our planning uses Scottish year groups and our exam help follows the SQA. Holiday dates from your school let us keep those weeks clear.' },
        { kind: 'callout', h3: 'Ayrshire pages and exam support', p: 'See <a class="cg-inline-link" href="/coding-classes-in-south-ayrshire">coding classes in South Ayrshire</a>, <a class="cg-inline-link" href="/coding-classes-in-east-ayrshire">East Ayrshire</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths tuition</a>. Why we teach reasoning before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Ayr project',
      h2: 'Two editions of "The Brigs of Ayr", aligned word by word with Needleman-Wunsch',
      intro: 'Strip the footnotes, split into words, fill a table of 3.4 million cells, and read off every edit.',
      body: [
        { kind: 'p', text: 'The learner downloads two Project Gutenberg books: "Poems and Songs of Robert Burns" and "The Complete Works of Robert Burns" edited with Allan Cunningham. Both contain "The Brigs of Ayr". Footnotes are removed, apostrophes made consistent and each version split into words: 1,839 in each. Scoring gives 2 points for a matching word, minus 1 for a different word and minus 2 for a gap, and the algorithm fills in a 1,840 by 1,840 table of top scores before tracing back the alignment.' },
        { kind: 'table', caption: 'Aligning the two editions of "The Brigs of Ayr", our Python run on Project Gutenberg texts', head: ['Result', 'Words'], rows: [
          ['Identical in both editions', '1,780'],
          ['Different word in the same place', '55'],
          ['Only in "Poems and Songs"', '4'],
          ['Only in "Complete Works"', '4'],
          ['Matching if compared position by position', '787']
        ] },
        { kind: 'p', text: 'Compared naively, position by position, only 787 of 1,839 words match. One edition hyphenates heart-felt and sheep-shank, which our word splitter reads as two words each, and every word after such a split is pushed out of step. The alignment shows the editions are in fact almost identical, with 1,780 words the same. The first difference comes at word 45, grey against gray. Most of the 55 substitutions are spelling and contraction choices: through against thro\', even against ev\'n, bonie against bonnie. Some are Scots against English forms, other against ither and very against vera, twice. A few change the sense, such as rolling against roaring. Even the dedication differs, Ballantine against Ballantyne.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Write two versions of a short rhyme, then find every change by lining them up word by word.' },
          { h3: 'S1 to S3', p: 'Load both Burns texts in Python, clean them and count how many words match by position.' },
          { h3: 'S4 and up', p: 'Code Needleman-Wunsch, trace back the alignment and sort the differences by type.' }
        ] },
        { kind: 'callout', h3: 'Gutenberg texts, our alignment', p: 'Both editions are Project Gutenberg texts, used under the Project Gutenberg licence. The cleaning, scoring, alignment and counts are our own; we make no claim about which edition is closer to Burns\'s manuscript.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Alignment and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Any AI edit deserves the same scrutiny as a second edition.',
      body: [
        { kind: 'table', caption: 'From the Brigs of Ayr alignment to working with AI', head: ['In the alignment project', 'When AI rewrites your text or code'], rows: [
          ['Position-by-position matched only 787', 'A naive comparison can exaggerate change'],
          ['Alignment found 1,780 identical words', 'Most of an edit is often untouched'],
          ['55 substitutions, mostly spelling', 'Sort changes into trivial and meaningful'],
          ['rolling against roaring changed the sense', 'A single word can alter meaning'],
          ['Four words appeared in only one edition', 'Watch for silent additions and deletions']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "tidy up" an essay or a program and it may change far more, or far less, than it claims. The same alignment idea powers the diff tools programmers use to review every change. Vibe coding means describing what you want while an AI writes it; our Ayr learners always review the AI\'s edits as a diff and question every line that changed. AI agents that edit files on your behalf should show their changes the same way before anything is saved. We introduce agent building after a learner can produce working Python unaided, which is typically S5 onwards or adulthood; Copilot Studio agents sit in one-to-one tuition only. The route in is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents page for students in the UK</a>, and the reasoning on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We have no connection with Project Gutenberg, National Records of Scotland or postcodes.io beyond using what they publish openly. The alignment and any mistakes in it are Modern Age Coders\' own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From spot-the-difference to alignment algorithms',
    intro: 'The school year tells us where to look first; the trial lesson confirms it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Careful comparison, patterns and explaining a difference.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and apps built with AI help, reviewed change by change.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and text', p: 'Strings, tables and dynamic programming alongside SQA Computing Science.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'AI and agents', p: 'Language models, reviewing their edits, and Python agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Text and algorithms',
    h2: 'How does a computer compare two versions of a text?',
    intro: 'It aligns them: an algorithm such as Needleman-Wunsch slides the two word sequences against each other, allowing gaps, and finds the cheapest set of matches, substitutions, insertions and deletions.',
    p1: 'On two Project Gutenberg editions of Burns\'s "The Brigs of Ayr", alignment showed 1,780 of 1,839 words identical and 55 substituted, while a position-by-position check matched only 787.',
    p2: 'Learners who have built that alignment ask of every AI edit: show me the diff, and what exactly changed?',
    closer: 'An Ayr teenager who reads the diff before pressing accept stays the author of their own work, and code is where that habit starts.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Alloway to Whitletts, all online',
    intro: 'All that is needed is a computer with a camera and broadband that copes with video.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'Learners type, prompt and run everything; the tutor watches the shared screen and asks them to justify each step.' },
      { h3: 'Pitched after the trial', p: 'The free lesson shows what to teach first, and any SQA course is noted.' },
      { h3: 'Free first session', p: 'Lesson one costs nothing and ends with a course suggestion.' },
      { h3: 'One-level classes', p: 'Five to ten learners from across the UK, all at the same stage.' },
      { h3: 'Two sessions weekly', p: 'Stopped for school holidays.' },
      { h3: 'Unchanging slot', p: 'When UK clocks change, tutors adjust and your time stays the same.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at the same stage and free on the same evening seldom live near each other. Over video, that does not matter.' }
  },

  fees: {
    h2: 'Ayr fees',
    intro: 'Ayr learners pay our international rates, which cover everywhere except India.',
    first: 'A full free lesson, then a recommendation.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'Billing happens in US dollars with no sterling option, beginning when the trial has settled which course and which weekly slot. Details of holiday breaks, missed sessions and format changes sit on the pricing page.'
  },

  reviewsH2: 'Google reviews from Ayrshire and beyond',

  book: {
    h2: 'Book a free Ayr lesson',
    intro: 'An age or year group and a hobby is all we ask. Trials range from a find-the-changes puzzle or an AI-assisted Scratch game to first Python lines or comparing two real texts side by side.',
    success: 'Thank you. Your Ayr request has reached us.'
  },

  faq: {
    h2: 'Ayr questions',
    intro: 'Text alignment, the Burns project, Python, vibe coding and the practical side.',
    items: [
      { q: 'What is the population of Ayr?', a: 'National Records of Scotland estimated 46,260 people in the Ayr locality in mid-2020.' },
      { q: 'Are coding and AI classes available online in Ayr?', a: 'All lessons are live video calls, so anyone 6 to 67 in Ayr or elsewhere in South Ayrshire can join.' },
      { q: 'What is the Needleman-Wunsch algorithm?', a: 'A dynamic programming method that finds the highest-scoring alignment of two sequences, allowing gaps. It was published in 1970 for protein sequences and works just as well on words.' },
      { q: 'How is a diff tool related to sequence alignment?', a: 'A diff lines up two versions of a file so that unchanged parts match and only the real insertions, deletions and changes are shown, which is an alignment problem.' },
      { q: 'What does the Ayr project involve?', a: 'Aligning two Project Gutenberg editions of Burns\'s "The Brigs of Ayr" word by word, finding 1,780 identical words and 55 substitutions, and sorting the differences.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, for every age; learners describe what they want, then review and test what the AI writes.' },
      { q: 'When can learners build AI agents?', a: 'When they can write working Python without help, often S5 or later; Copilot Studio is one-to-one.' },
      { q: 'Is there SQA exam support?', a: 'For Computing Science and Maths at every level from National 5, with understanding as the target and no grade promised.' },
      { q: 'How much are lessons?', a: 'No charge for the trial; USD 100 per month buys a class place and USD 150 per month buys private lessons.' },
      { q: 'Do lessons pause for holidays?', a: 'Yes, during school holidays; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Ayrshire and west of Scotland pages',
    html: 'Neighbouring pages, each built round its own experiment: <a class="cg-inline-link" href="/coding-classes-in-south-ayrshire">South Ayrshire</a> (boiling the sea for salt), <a class="cg-inline-link" href="/coding-classes-in-east-ayrshire">East Ayrshire</a> (recognising the Burns stanza), <a class="cg-inline-link" href="/coding-classes-in-north-ayrshire">North Ayrshire</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-paisley">Paisley</a>. Beyond Ayrshire, try <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ayr and South Ayrshire',
  footerPlaces: [
    { href: '/coding-classes-in-south-ayrshire', label: 'South Ayrshire' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ayr .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-ayr .cg-hero h1 { font-weight: 760; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-ayr .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; font-style: normal; }
.cg-root.cg-ayr .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ayr .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-ayr .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-ayr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ayr .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-ayr .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-ayr .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'South Ayrshire (S12000028). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: Ayr 46,260. postcodes.io (South Ayrshire, KA7/KA8): Alloway, Belmont, Castlehill, Dalmilling, Doonfoot, Forehill, Heathfield, Holmston, Kincaidston, Lochside, Masonhill, Newton on Ayr, Seafield, Wallacetown, Whitletts (suburban areas).',
    localProject: 'Burns, "The Brigs of Ayr": Project Gutenberg 1279 (lines 10472-10752) and 18500 (lines 13918-14178); footnotes removed; 1,839 words each. Word-level Needleman-Wunsch (+2/-1/-2), 3,385,600 cells: 1,780 identical, 55 substituted, 4 + 4 gaps; position-by-position 787. First difference word 45 grey/gray. Lesson family: global sequence alignment, edit scripts.',
    requiredMentions: [
      '46,260',
      '1,780',
      'Alloway',
      'Doonfoot',
      'Whitletts',
      'Kincaidston',
      'Holmston',
      'Wallacetown',
      'Brigs of Ayr',
      'Needleman-Wunsch'
    ],
    sources: [
      { claim: 'Poems and Songs of Robert Burns, Project Gutenberg ebook 1279.', url: 'https://www.gutenberg.org/ebooks/1279' },
      { claim: 'The Complete Works of Robert Burns, with Allan Cunningham, Project Gutenberg ebook 18500.', url: 'https://www.gutenberg.org/ebooks/18500' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas in South Ayrshire.', url: 'https://api.postcodes.io/places?q=Doonfoot' }
    ],
    rejectedClaims: [
      'Burns biography, birthplace or the bridges\' construction history: not read from a source; not claimed.',
      'Which edition is closer to Burns\'s manuscript: not claimed.',
      'Meaning of Scots words beyond the pairs shown: not glossed.',
      'Largest locality in South Ayrshire: per NRS mid-2020 figures quoted on the South Ayrshire page (Ayr 46,260, Troon 14,950, Prestwick 14,880).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
