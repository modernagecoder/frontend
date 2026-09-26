'use strict';
// Cumbria (cg- county index, UK cluster Phase 7, row 226). Ceremonial Cumbria; the 2021 Census counted six districts
// (Allerdale, Barrow-in-Furness, Carlisle, Copeland, Eden, South Lakeland); two unitary councils now serve it.
// Cumberland Council's own site speaks of "moving across content from the former Allerdale, Carlisle and Copeland
// websites". Spine: what did the model actually learn? Project Gutenberg editions read raw 26 September 2026: The
// Poetical Works of William Wordsworth, Volume 1 (ebook 10219, ed. William Knight) and The Complete Poetical Works of
// Samuel Taylor Coleridge, Volume 1 (ebook 29091, ed. Ernest Hartley Coleridge); The Rime of the Ancient Mariner
// (ebook 151); Lyrical Ballads 1798 (ebook 9622). Cumbrian anchors inside the editions: Coleridge's Christabel
// preface, "The second part, after my return from Germany, in the year 1800, at Keswick, Cumberland"; Knight on
// "the brother and sister lived together at Grasmere" and "the 'School Exercise written at Hawkshead' in the poet's
// fourteenth year". Our run (scratchpad cum/nb.py, seed 20260926): 300-word chunks, Wordsworth 342, Coleridge 572;
// 80/20 split, 731 train, 183 test; majority baseline (always Coleridge) 60.7 per cent; multinomial naive Bayes with
// add-one smoothing 96.7 per cent (6 Coleridge chunks called Wordsworth). Most telling words were editorial or
// names: Coleridge-leaning linenotes 173-0, sibylline, southey, MSS; Wordsworth-leaning Marmaduke 211-0, Oswald,
// Idonea (characters in his play), variant, footnote. After dropping 223 one-sided and editorial tokens: 94.5 per
// cent. Separate plain edition of the Ancient Mariner: 13 out of 13 chunks called Coleridge. Chunk size: 10 words
// 79.1, 30 words 86.9, 100 words 93.1, 300 words 96.7. Lesson family: naive Bayes text classification, baselines,
// and leakage (the model learning the editions rather than the poets); screened (naive Bayes: 0 hits; Bath's cosine
// similarity on Austen is a different technique and point).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (499,849, our sum of six districts); ONS built-up
// areas, all 15 above 5,000 inside the county. National Trust and Wordsworth Trust pages: JS-rendered or 403.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'CUMBRIA', blurb: 'Six former districts, fifteen towns, and a classifier that tells Wordsworth from Coleridge, then turns out to have been reading the footnotes.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-cumbria',
  code: 'cmb',
  accent: '#465F6B',
  accentRationale: 'Cumbria: a lake-slate blue-grey from the solver (5.44:1 on the darkest paper tint), the only grey-blue among the UK county accents',
  pageType: 'governorate',
  place: {
    name: 'Cumbria',
    eyebrow: 'County of Cumbria',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'North West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Carlisle', href: '/best-coding-class-in-carlisle' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cumbria',
  title: 'Coding Classes in Cumbria | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, AI and maths classes across Cumbria, from Carlisle, Barrow-in-Furness and Kendal to Whitehaven, Workington, Penrith and Ulverston.',
  ogDescription: 'Coding classes for every Cumbrian town, and an AI project on the Lake poets: teach a program to tell Wordsworth from Coleridge, then find out what it really learned.',
  twitterDescription: 'Cumbria coding, Python and AI classes for ages 6 to 67, live online. The first lesson is free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Cumbria',
    description: 'Ability-placed online coding, Python, AI, machine learning and mathematics for children, teenagers and adults across Cumbria, taught live in English.'
  },

  h1: 'Coding classes in Cumbria',
  capsuleQ: 'What are the best coding classes in Cumbria?',
  capsule: 'Cumbria had 499,849 residents at the 2021 Census, counted then in six districts and now served by two councils, Cumberland and Westmorland and Furness. Carlisle is by far the largest town, then Barrow-in-Furness, Kendal, Whitehaven and Workington, and after them small towns scattered across fells, coast and valleys. Distance is the county\'s defining fact, and online teaching is how we answer it: a teacher in India, live on video, working with learners placed by ability rather than age, anyone from 6 up to 67, in small groups of five to ten or on their own. We teach programming, Python, AI, machine learning and maths. The Cumbria project is about the Lake poets and a machine that learns. The first lesson costs nothing; then a group place is USD 100 a month and private teaching USD 150.',
  lead: 'Wordsworth grew up and wrote in the Lakes, and Coleridge wrote part of Christabel "in the year 1800, at Keswick, Cumberland", as his own preface puts it. Their styles are different enough that a simple machine learning model can tell their poetry apart with startling accuracy. This page\'s project builds that model from scratch, a naive Bayes classifier, and trains it on free editions of each poet. It scores nearly 97 per cent. Then comes the twist every learner should see once: when you ask the model which words convinced it, many of them turn out not to be poetry at all, but the editors\' footnotes. The project is about building a classifier, and even more about asking what it has really learned.',
  wa: 'Hello Modern Age Coders, I would like a free lesson for a learner in Cumbria.',

  picks: {
    eyebrow: 'Courses for Cumbria',
    h2: 'Where Cumbrian learners usually begin',
    intro: 'A nine-year-old in Cockermouth curious about how chatbots work, an eleven-year-old in Penrith ready for real Python, a Year 12 in Kendal interested in machine learning, and a teaching assistant in Workington who wants to understand the AI tools arriving at work. One free lesson each.',
    items: [
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 14', note: 'How AI actually works, how it learns from data, where it goes wrong and how to judge it, with supervised tools.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python, with word counting and simple predictions that show a child how a model is built.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Python, real machine learning models, neural networks, language processing and modern generative AI.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Adults', note: 'Python to working with large language models: prompts, retrieval, fine-tuning, agents and production skills.' }
    ]
  },

  sections: [
    {
      id: 'cumbria', tint: '', eyebrow: 'The county in figures',
      h2: '499,849 people across six former districts and two new councils',
      intro: 'The 2021 Census was taken in the old six-district geography, and those are the figures Nomis publishes. The town list is the ONS built-up areas, which we confirmed against our own small-area totals.',
      body: [
        { kind: 'table', caption: 'Cumbria\'s six former districts at the 2021 Census, usual residents, largest first', head: ['Former district', 'Usual residents', 'Main towns', 'Council today'], rows: [
          ['Carlisle', '110,024', 'Carlisle', 'Cumberland'],
          ['South Lakeland', '104,450', 'Kendal, Ulverston', 'Westmorland and Furness'],
          ['Allerdale', '96,157', 'Workington, Cockermouth, Maryport, Wigton', 'Cumberland'],
          ['Barrow-in-Furness', '67,407', 'Barrow-in-Furness, Dalton-in-Furness', 'Westmorland and Furness'],
          ['Copeland', '67,076', 'Whitehaven, Cleator Moor, Egremont, Millom', 'Cumberland'],
          ['Eden', '54,735', 'Penrith', 'Westmorland and Furness']
        ] },
        { kind: 'p', text: 'Cumberland Council\'s own website describes it as moving across content from the former Allerdale, Carlisle and Copeland councils, which leaves Barrow-in-Furness, Eden and South Lakeland in the Westmorland and Furness area. Either way, the numbers tell the same story: under half a million people spread over one of England\'s largest counties, with only Carlisle above 60,000. For a teenager who wants to go further with programming, the nearest group at the right level may be two valleys and an hour away.' },
        { kind: 'table', caption: 'All fifteen Cumbrian built-up areas above 5,000 residents, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Carlisle', '77,730', 'Cockermouth', '8,860'],
          ['Barrow-in-Furness', '55,255', 'Maryport', '8,525'],
          ['Kendal', '28,940', 'Dalton-in-Furness', '7,555'],
          ['Whitehaven', '22,945', 'Cleator Moor', '6,670'],
          ['Workington', '21,275', 'Egremont', '5,795'],
          ['Penrith', '16,700', 'Millom', '5,690'],
          ['Ulverston', '11,220', 'Wigton', '5,395'],
          ['Seaton', '5,050', '', '']
        ] },
        { kind: 'p', text: 'Each of the fifteen agrees with our own output-area count within rounding, and all lie inside the county. We print no school calendar: the two councils and the academies set their own dates, and lesson breaks are agreed with each family around the dates their school sends home.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Cumbria project',
      h2: 'Teaching a program to tell Wordsworth from Coleridge',
      intro: 'Two free Gutenberg editions, a classifier a sixteen-year-old can write from first principles, and a result that is right for partly the wrong reasons.',
      body: [
        { kind: 'p', text: 'The learner takes the first volume of each poet\'s collected works from Project Gutenberg, splits the text into chunks of 300 words, and labels each chunk with its author: 342 Wordsworth, 572 Coleridge. Four-fifths train the model, the rest test it. Naive Bayes is simple: for each author, count how often every word appears, then score a new chunk by how likely its words would be under each author\'s counts, with one added to every count so an unseen word does not wreck the sum. The chunk goes to whichever author scores higher.' },
        { kind: 'table', caption: 'Our run of 26 September 2026 (seed 20260926)', head: ['Test', 'Result'], rows: [
          ['Always guess the bigger author, Coleridge', '60.7 per cent correct, the baseline to beat'],
          ['Naive Bayes on 300-word chunks', '96.7 per cent correct on 183 unseen chunks'],
          ['Same, after removing 223 one-sided and editorial words', '94.5 per cent'],
          ['A separate plain edition of the Ancient Mariner', '13 out of 13 chunks called Coleridge'],
          ['Smaller chunks: 100, 30 and 10 words', '93.1, 86.9 and 79.1 per cent']
        ] },
        { kind: 'p', text: 'The first row is the lesson people forget. A model that always says "Coleridge" would already be right 60.7 per cent of the time, because there are more Coleridge chunks. Any accuracy figure is meaningless until you compare it with that lazy baseline. Ours beats it comfortably. The last row shows the other honest limit: with only ten words to go on, the model is right 79.1 per cent of the time, because short passages simply carry less evidence.' },
        { kind: 'p', text: 'Then the twist. Asked which words most strongly pointed to Coleridge, the model listed "linenotes", "MSS" and "sibylline", editorial markers from his edition. Its strongest Wordsworth clues included "Marmaduke" and "Oswald", characters in his play The Borderers, and the words "variant" and "footnote". The model had partly learned to recognise the editors, not the poets. Removing the giveaway words cost only two points, and a separately published Ancient Mariner was still classified correctly every time, so some genuine style signal is there. But a learner who never asks "what did it learn?" would never know how much.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Count the ten commonest words in two short poems by hand, then in Python, and guess which poet wrote a mystery verse.' },
          { h3: 'Ages 13 to 16', p: 'Build the naive Bayes classifier with add-one smoothing, measure the baseline first, and report accuracy against it.' },
          { h3: 'Ages 16 and up', p: 'List the most telling words, spot the editorial leakage, clean it out and measure how much accuracy was real.' }
        ] },
        { kind: 'callout', h3: 'What this does not prove', p: 'Our result says a word-count model can separate two collected editions. It does not settle any question of who wrote what, and the 1798 Lyrical Ballads were published anonymously, so we make no claims about individual poems. The texts are Project Gutenberg\'s public domain editions; the chunks, the model and the numbers are ours.' }
      ]
    },
    {
      id: 'lakes', tint: 'deep', eyebrow: 'Why the Lakes',
      h2: 'Two poets, Keswick and Grasmere, in their own editions',
      intro: 'The Cumbria link, quoted from the Gutenberg editions the project uses.',
      body: [
        { kind: 'table', caption: 'Cumbrian places in the two collected editions', head: ['Edition', 'What it says'], rows: [
          ['Coleridge, preface to Christabel', '"The second part, after my return from Germany, in the year 1800, at Keswick, Cumberland."'],
          ['Wordsworth, ed. William Knight', 'Dorothy Wordsworth\'s journal covers the years "when the brother and sister lived together at Grasmere".'],
          ['Wordsworth, ed. William Knight', 'The "School Exercise written at Hawkshead" dates from "the poet\'s fourteenth year".'],
          ['Wordsworth, ed. William Knight', 'Its list of illustrations includes Cockermouth, Hawkshead, Dove Cottage and Allan Bank, Grasmere.']
        ] },
        { kind: 'p', text: 'The same Gutenberg files that train the model also record where these poems were written, which is a neat reminder that data carries its context with it, sometimes more than we want. The footnotes that tell a historian where Christabel was finished are exactly the footnotes that fooled our classifier. Good data science reads both.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Project Gutenberg, the National Trust, the Wordsworth Trust, Cumberland Council or Westmorland and Furness Council, and nothing on this page implies one. The texts are public domain; the analysis and any errors in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-carlisle">Carlisle</a> has a page of its own, <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> and <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> are to the south, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links the rest.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From counting words to questioning a model',
    intro: 'The free lesson finds where to start. School year hints at it; ability decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Patterns in words', p: 'Scratch and word games where children sort, count and match, the first steps toward seeing data in text.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'How AI learns', p: 'Python word counts and simple predictions, alongside honest lessons on where AI tools go wrong.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 13 to 18', h3: 'Models you can explain', p: 'Classifiers, baselines, evaluation and leakage, so a teenager can build a model and defend its numbers.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'AI at work, understood', p: 'Adults learn how language models are built and tested, and how to check what a tool has really learned.', courses: ['complete-generative-ai-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI, honestly',
    h2: 'A model scored 96.7 per cent. Why should a Cumbrian teenager doubt it?',
    intro: 'Because the number alone never says what the model was looking at.',
    p1: 'High accuracy is the most convincing and the most misleading number in machine learning. Our classifier was genuinely good at telling two collected editions apart, and partly for reasons that had nothing to do with poetry. The same trap catches real systems: medical models that learn which hospital took the scan, hiring models that learn a postcode, AI detectors that learn a font. The failure is invisible until someone asks the model to show its reasons.',
    p2: 'A learner who has found "linenotes" at the top of their own model\'s list will never again accept an accuracy figure without asking for a baseline, a clean test set and the model\'s most influential features. That habit is the difference between using AI and being fooled by it, and it is exactly what schools, employers and anyone evaluating an AI claim now need.',
    closer: 'So a Cumbrian teenager should learn to code in 2026 to be able to open up a model and see what it has really learned, a skill worth more than any single score.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The practical side',
    h2: 'Millom to Carlisle with the fells in between',
    intro: 'Cumbria\'s distances are long and its roads slow in winter. Online lessons ignore both.',
    cells: [
      { h3: 'Taught where you live', p: 'A farmhouse table near Wigton, a bedroom in Egremont, a desk in Ulverston. Teacher and learner share one screen.' },
      { h3: 'School words, in English', p: 'Year 9 options, GCSEs and A levels are named the way Cumbrian schools name them, and teaching is in English.' },
      { h3: 'The first lesson is free', p: 'A proper lesson with real work and a clear recommendation afterwards. There is nothing to pay and no card to give.' },
      { h3: 'A class at your stage', p: 'Five to ten learners who have reached the same point, from towns and countries far apart, meeting at a sensible hour.' },
      { h3: 'Your school\'s holidays', p: 'Two lessons a week is typical, paused whenever your own school breaks up.' },
      { h3: 'Always in UK time', p: 'Teachers are in India, four and a half hours ahead of UK summer time and five and a half ahead in winter; you only ever see UK time.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'Fifteen towns spread over mountains and coast mean no single place has enough learners at every stage. Level-based groups let a Maryport learner and a Kendal learner share one class.' }
  },

  fees: {
    h2: 'Fees in Cumbria',
    intro: 'One price for every Cumbrian town, and for every country outside India.',
    first: 'A full lesson of real work, finishing with a recommended level and course.',
    group: 'About eight lessons a month in a group of five to ten at the same level.',
    private: 'About eight lessons a month with a teacher and one learner.',
    closer: 'We charge in US dollars for all families outside India and have no pound price list. The first payment is taken only after the free lesson has settled a course and weekly slot; pauses, missed lessons and changes between group and private teaching are covered on the pricing page.'
  },

  reviewsH2: 'Families\' words, from Google',

  book: {
    h2: 'Start with a free lesson',
    intro: 'Give us an age or school year and one interest. The first lesson could be an AI literacy session, a first Python word counter, or the Lake poets classifier on this page.',
    success: 'Thank you. Your Cumbria request has reached us.'
  },

  faq: {
    h2: 'Cumbria questions',
    intro: 'On the county, the poets project and the lessons.',
    items: [
      { q: 'How many people live in Cumbria?', a: 'The 2021 Census counted 499,849 usual residents across Cumbria\'s six former districts, from ONS figures on Nomis. Carlisle was the largest at 110,024 and Eden the smallest at 54,735.' },
      { q: 'Which councils cover Cumbria now?', a: 'Two unitary councils: Cumberland, which took over from the former Allerdale, Carlisle and Copeland councils, and Westmorland and Furness, covering Barrow-in-Furness, Eden and South Lakeland.' },
      { q: 'What are the largest towns in Cumbria?', a: 'By ONS built-up area: Carlisle 77,730, Barrow-in-Furness 55,255, Kendal 28,940, Whitehaven 22,945 and Workington 21,275. All fifteen above five thousand are listed on this page.' },
      { q: 'What is the Lake poets project?', a: 'Learners build a naive Bayes classifier from free Gutenberg editions of Wordsworth and Coleridge. It reaches 96.7 per cent against a 60.7 per cent baseline, and its most telling words reveal it partly learned the editors\' footnotes.' },
      { q: 'Why does a baseline matter?', a: 'Because always guessing the more common author would already score 60.7 per cent here. An accuracy figure only means something compared with that.' },
      { q: 'Is there a classroom in Carlisle or Kendal?', a: 'No. Every lesson is live online, so a learner in Millom and one in Penrith can be in the same class with no journey.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Scratch and word games for young children, typed Python from about ten, AI and machine learning for teenagers, and data or AI routes for adults. The free lesson decides the starting level.' },
      { q: 'Do you teach AI to children?', a: 'Yes. Our AI literacy course for ages 8 to 14 explains how AI learns from data and where it goes wrong, using age-appropriate supervised tools.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Then a group place is USD 100 a month and private lessons USD 150 a month, with no joining fee and no fixed term.' },
      { q: 'When are Cumbrian school holidays?', a: 'Cumberland, Westmorland and Furness and the academies set their own dates. We arrange lesson breaks around your school\'s calendar.' }
    ]
  },

  next: {
    eyebrow: 'Around the UK',
    h2: 'Other pages from here',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-carlisle">Carlisle</a> has its own page. For other counties see <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a>, <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> or <a class="cg-inline-link" href="/coding-classes-in-cornwall">Cornwall</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for everything else.',
    waLabel: 'Message us'
  },

  footerHeading: 'Cumbria and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-carlisle', label: 'Carlisle' },
    { href: '/coding-classes-in-cheshire', label: 'Cheshire' }
  ],

  personalityCss: `
.cg-root.cg-cmb .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 2.9vw, 2.5rem); }
.cg-root.cg-cmb .cg-hero h1 { font-weight: 650; letter-spacing: -0.022em; line-height: 1.05; }
.cg-root.cg-cmb .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-cmb .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cmb .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.016em; }
.cg-root.cg-cmb .cg-table caption { font-style: italic; font-weight: 600; letter-spacing: 0.01em; }
.cg-root.cg-cmb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cmb .cg-table th { text-transform: uppercase; letter-spacing: 0.04em; }
.cg-root.cg-cmb .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-cmb .cg-callout { border-left-width: 7px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Cumbria (ceremonial; 2021 Census districts Allerdale, Barrow-in-Furness, Carlisle, Copeland, Eden, South Lakeland; now Cumberland and Westmorland and Furness councils). ONS Census 2021 TS001 via Nomis: Carlisle 110,024; South Lakeland 104,450; Allerdale 96,157; Barrow-in-Furness 67,407; Copeland 67,076; Eden 54,735; total 499,849 (our sum). ONS Census 2021 built-up areas (published; all 15 agree with our OA sums and lie in the county): Carlisle 77,730; Barrow-in-Furness 55,255; Kendal 28,940; Whitehaven 22,945; Workington 21,275; Penrith 16,700; Ulverston 11,220; Cockermouth 8,860; Maryport 8,525; Dalton-in-Furness 7,555; Cleator Moor 6,670; Egremont 5,795; Millom 5,690; Wigton 5,395; Seaton 5,050. Cumberland Council website: "moving across content from the former Allerdale, Carlisle and Copeland websites". Project Gutenberg: ebook 29091 The Complete Poetical Works of Samuel Taylor Coleridge Vol 1 (editor Ernest Hartley Coleridge), Christabel preface: "The first part of the following poem was written in the year 1797, at Stowey, in the county of Somerset. The second part, after my return from Germany, in the year 1800, at Keswick, Cumberland"; ebook 10219 The Poetical Works of William Wordsworth Vol 1 (editor William Knight): "when the brother and sister lived together at Grasmere"; "The \'School Exercise written at Hawkshead\' in the poet\'s fourteenth year"; illustrations list Cockermouth, Dame Tyson\'s Cottage Hawkshead, Dove Cottage, Allan Bank Grasmere; ebook 151 The Rime of the Ancient Mariner (Coleridge); ebook 9622 Lyrical Ballads 1798.',
    localProject: 'Naive Bayes text classification, baselines and leakage. Gutenberg bodies (header/footer removed), lower-cased letter tokens, 300-word chunks: Wordsworth (10219) 342, Coleridge (29091) 572; shuffled with seed 20260926, 80/20 split: 731 train, 183 test. Majority baseline (Coleridge) 60.7 per cent. Multinomial naive Bayes, add-one smoothing, class priors: 96.7 per cent (confusion: W correct 72, C correct 105, 6 Coleridge chunks called Wordsworth). Most indicative words: Coleridge linenotes 173/0, sibylline 92/0, southey 77/0, mss 65/0, christabel 55/0; Wordsworth marmaduke 211/0, oswald 170/0, herbert 83/0, idonea 74/0, variant 436/15, footnote 151/27 (Marmaduke, Oswald, Idonea and Herbert are characters in The Borderers). Dropping 223 one-sided or editorial tokens: 94.5 per cent. Ancient Mariner (151) 13/13 chunks called Coleridge (both before and after filtering). Lyrical Ballads 1798: 54 of 74 chunks called Wordsworth (not presented as attribution). Chunk size: 10 words 79.1, 30 words 86.9, 100 words 93.1, 300 words 96.7. AI angle: accuracy without a baseline and feature inspection hides leakage. Lesson family: naive Bayes, baselines, leakage.',
    requiredMentions: [
      '499,849',
      '96.7 per cent',
      '60.7 per cent',
      '94.5 per cent',
      'Marmaduke',
      'linenotes',
      'at Keswick, Cumberland',
      'School Exercise written at Hawkshead',
      'Dalton-in-Furness',
      '13 out of 13'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Cumbria\'s six former districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Cumbrian towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cumberland Council: content moving from the former Allerdale, Carlisle and Copeland websites.', url: 'https://www.cumberland.gov.uk/' },
      { claim: 'Project Gutenberg, The Complete Poetical Works of Samuel Taylor Coleridge, Vol 1: Christabel preface, Keswick 1800.', url: 'https://www.gutenberg.org/ebooks/29091' },
      { claim: 'Project Gutenberg, The Poetical Works of William Wordsworth, Vol 1, ed. William Knight: Grasmere, Hawkshead.', url: 'https://www.gutenberg.org/ebooks/10219' },
      { claim: 'Project Gutenberg, The Rime of the Ancient Mariner.', url: 'https://www.gutenberg.org/ebooks/151' }
    ],
    rejectedClaims: [
      'Wordsworth\'s birthplace details from the National Trust: its Wordsworth House page renders by script and could not be read; the Wordsworth Trust returned 403.',
      'Which poems in Lyrical Ballads 1798 each poet wrote: no primary source for the attribution was readable, so the page makes no per-poem claims.',
      'The date the two new Cumbrian councils began: not read at a primary source; the page says only that two councils now serve the county.',
      'Cumbrian school term dates: set by two councils and academies; none read.',
      'Sellafield and nuclear topics: not relevant and left out.',
      'Named Cumbrian schools: none is named.'
    ]
  }
};
